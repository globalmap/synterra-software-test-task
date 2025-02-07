import { createRxDatabase, addRxPlugin, RxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { NoteCollection, noteSchema } from './models/notes';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";

addRxPlugin(RxDBDevModePlugin);

export async function initDB(): Promise<RxDatabase> {
  const database = await createRxDatabase({
    name: "notedb",
    storage: wrappedValidateAjvStorage({
      storage: getRxStorageDexie(),
    }),
  });

  try {
    const noteCollection = await database.addCollections({
      notes: {
        schema: noteSchema,
      },
    });
  } catch (error) {
    console.error("error creating collections", error);
  }

  return database;
}
export type DatabaseCollections = {
  notes: NoteCollection;
};

export type Database = RxDatabase<DatabaseCollections>;
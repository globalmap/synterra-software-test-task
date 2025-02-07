import { createRxDatabase, addRxPlugin, RxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { NoteCollection, noteSchema } from './models/notes';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

addRxPlugin(RxDBDevModePlugin);

export async function initDB() {
  const database: Database = await createRxDatabase({
    name: 'notesdb',
    storage: getRxStorageDexie(),
    ignoreDuplicate: true
  });

  database.addCollections({
    notes: {
      schema: noteSchema
    }
  })

  return database;
}

export type DatabaseCollections = {
  notes: NoteCollection
}

export type Database = RxDatabase<DatabaseCollections>;
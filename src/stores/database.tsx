"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Database, initDB } from "@/databases";
import { RxDatabase } from "rxdb";
import { fetchNotes } from "@/services/apiClient";
import { Note } from "@/databases/models/notes";

interface DatabaseContextData {
  database: Database;
}

const DatabaseContext = createContext({} as DatabaseContextData);

export function DatabaseProvider({ children }: PropsWithChildren) {
  const [database, setDatabase] = useState<any>();
  useEffect(() => {
    (async () => {
      if (!database) {
        const database = await initDB();
        setDatabase(database);

        if (
          typeof window !== "undefined" &&
          (await database.notes.find().exec()).length === 0
        ) {
          const notes = await fetchNotes();

          notes.forEach(async (note: Note) => {
            await database.notes.insert({
              id: note.id.toString(),
              title: note.title,
              body: note.body,
            });
          });
        }
      }
    })();
  });
  if (!database) {
    return <span>Loading data...</span>;
  }

  return (
    <DatabaseContext.Provider value={{ database }}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const { database } = useContext(DatabaseContext);

  return database;
}

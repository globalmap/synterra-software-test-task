"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Database, initDB } from "@/databases";

interface DatabaseContextData {
  database: Database;
}

const DatabaseContext = createContext({} as DatabaseContextData);

export function DatabaseProvider({ children }: PropsWithChildren) {
  const [database, setDatabase] = useState<Database>();
  useEffect(() => {
    (async () => {
      const database = await initDB();
      setDatabase(database);
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

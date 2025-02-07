"use client";
import { NoteDocumentType } from "@/databases/models/notes";
import { useDatabase } from "@/stores/database";
import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import Link from "next/link";

const NoteList = () => {
  const database = useDatabase();

  const [notes, setNotes] = useState<NoteDocumentType[]>([]);

  useEffect(() => {
    database.notes
      .find()
      .exec()
      .then((notes) => {
        setNotes(notes);
      });
  }, [database]);

  return (
    <section className='lg:w-[80%] lg:p-10 h-[screen-4%] lg:gap-4 md:w-[90%] md:h-[90%] md:p-4 md:gap-3 flex justify-between items-center flex-col bg-[#171616] rounded-[12px] sm:w-[90%] sm:h-[90%] sm:p-3 sm:gap-3 w-full h-full p-2 gap-3'>
      <header
        style={{ borderRadius: "7px 30px 30px 7px" }}
        className='notes_header lg:mb-3 h-[60px] w-full bg-[#1e1c1c] flex justify-between items-center pl-2 border-[1px] border-[#ffffff0a] border-solid'>
        <h2 className="text-[28px] text-white ml-5 font-['Poppu']">My Notes</h2>
      </header>
      <div className='notes_container grid lg:grid-cols-4 md:grid-cols-3 md:mt-4 sm:grid-cols-2 xs:grid-col-1 flex-1 overflow-auto w-full gap-4 sm:mt-3 p-2 grid-cols-2'>
        {notes.length == 0 && <p className='text-white'>No Notes Found!</p>}
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link
        prefetch={true}
        className='flex justify-center text-center align-middle lg:w-[120px] md:w-[220px] sm:w-[320px] w-full gap-2 lg:mt-3 md:mt-3 sm:mt-3 mt-4 bg-gradient-to-br from-[#43CBFF] to-[#9708CC] text-green-50 p-2 rounded-md'
        href='new-note'>
        Add New Note
      </Link>
    </section>
  );
};

export default NoteList;
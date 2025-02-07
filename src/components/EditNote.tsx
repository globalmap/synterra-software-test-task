"use client";

import { Note } from "@/databases/models/notes";
import { deleteNote, updateNote } from "@/services/apiClient";
import { useDatabase } from "@/stores/database";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RxDocument } from "rxdb";

const EditNote = () => {
  const { id } = useParams();

  if (typeof id !== "string") redirect("/");

  const database = useDatabase();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [noteDocument, setNoteDocument] = useState<RxDocument<Note>>();

  useEffect(() => {
    (async () => {
      const note = await database.notes.findOne(id).exec();

      if (note) {
        setTitle(note.title);
        setBody(note.body);
        setNoteDocument(note);
      }
    })();
  }, [id]);

  const handleForm = async () => {
    if (!noteDocument) return;

    try {
      const updateData = {
        id,
        body,
        title,
      };
      await updateNote(updateData);
      await noteDocument.patch(updateData);
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNote(id);
      await noteDocument?.remove();
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <section className=' w-full lg:w-1/2 flex justify-center items-center gap-4 flex-col md:w-[80%] sm:w-[90%] p-6 bg-[#141313] rounded-md sm:w-[90%]'>
      <header className='create_note_header flex justify-between items-center w-full'>
        <Link
          href={"/"}
          className='rounded-md bg-transparent text-white p-3 font-extrabold text-lg border-[2px] border-[#ffffff31] border-solid'>
          Back
        </Link>
        <div className='flex gap-1 items-center'>
          <button
            onClick={handleForm}
            className='rounded-md bg-transparent text-white px-4 py-2 border-[2px] border-[#ffffff31] border-solid'>
            Save
          </button>
          <button
            onClick={handleDelete}
            className='rounded-md bg-gradient-to-br from-[#43CBFF] to-[#9708CC] text-white p-3'>
            delete
          </button>
        </div>
      </header>
      <form
        onSubmit={handleForm}
        className='create_note_form w-full gap-3 flex mt-3 flex-col items-center justify-center'>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          className='w-full outline-none p-4 text-2xl text-white bg-[#ffffff03] rounded-t-md border-[1px] border-[#ffffff1a] border-solid lg:text-[20px] md:text-[18px] sm:text-[18px] text-[16px]'
        />
        <hr />
        <textarea
          rows={10}
          placeholder='Notes Details...'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className='w-full outline-none text-white p-4 bg-[#ffffff03] resize-none rounded-b-md border-[1px] border-[#ffffff1a] border-solid lg:text-[18px] md:text-[16px] sm:text-[16px] text-[14px]'
        />
      </form>
    </section>
  );
};

export default EditNote;

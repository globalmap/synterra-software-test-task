import { Note } from "@/databases/models/notes";
import Link from "next/link";
import React from "react";

const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <Link
      href={`edit-note/${note.id}`}
      className='note bg-gradient-to-r from-[#222] to-[#1e1e1e1a] lg:p-4 md:p-4 sm:p-2 p-1 rounded-md flex flex-col items-start border-[1px] border-[#ffffff0a] border-solid h-[150px] overflow-hidden'>
      <h4 className='text-[#FFF] lg:text-xl md:text-lg sm:text-sm text-xs truncate w-full'>
        {note.title}
      </h4>
      <p className='text-[rgba(255,255,255,0.50)] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-full overflow-hidden line-clamp-3'>
        {note.body}
      </p>
    </Link>
  );
};

export default NoteItem;

import NoteList from "@/components/NoteList";

export default function Home() {
  return (
    <main className='app w-screen h-screen flex justify-center py-3 p-2 items-center bg-gray-700 '>
      <NoteList />
    </main>
  );
}

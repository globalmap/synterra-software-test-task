import { Note } from "@/databases/models/notes";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchNotes() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createNote(note: Note) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return response.json();
}

export async function updateNote(note: Note) {
  const response = await fetch(`${API_URL}/${note.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return response.json();
}

export async function deleteNote(id: string) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

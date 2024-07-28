// src/components/NoteList.jsx
import React from "react";
import Note from "./Note";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;

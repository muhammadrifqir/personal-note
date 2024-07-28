// src/components/Note.jsx
import React from "react";

function Note({ note, onDelete, onArchive }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
      <button onClick={() => onDelete(note.id)}>Hapus</button>
      <button onClick={() => onArchive(note.id)}>
        {note.archived ? "Unarchive" : "Archive"}
      </button>
    </div>
  );
}

export default Note;

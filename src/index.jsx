// src/index.js
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import { getInitialData, showFormattedDate } from "./utils";
import NoteForm from "./components/NoteForm";

// Komponen Note
function Note({ note, onDelete, onArchive }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p>{showFormattedDate(note.createdAt)}</p>
      <button onClick={() => onDelete(note.id)}>Hapus</button>
      <button onClick={() => onArchive(note.id)}>
        {note.archived ? "Unarchive" : "Archive"}
      </button>
    </div>
  );
}

// Komponen NoteList
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

// Komponen NoteSearchBar
function NoteSearchBar({ keyword, onKeywordChange }) {
  return (
    <input
      type="text"
      placeholder="Search notes by title..."
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
    />
  );
}

// Komponen App
function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="app">
      <h1>Personal Notes</h1>
      <NoteSearchBar
        keyword={searchKeyword}
        onKeywordChange={setSearchKeyword}
      />
      <NoteForm onAdd={handleAddNote} />

      <h2>Catatan Aktif</h2>
      <NoteList
        notes={activeNotes}
        onDelete={handleDeleteNote}
        onArchive={handleArchiveNote}
      />

      <h2>Catatan Arsip</h2>
      <NoteList
        notes={archivedNotes}
        onDelete={handleDeleteNote}
        onArchive={handleArchiveNote}
      />
    </div>
  );
}

// Render aplikasi
const root = createRoot(document.getElementById("root"));
root.render(<App />);

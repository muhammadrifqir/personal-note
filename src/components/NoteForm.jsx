// src/components/NoteForm.jsx
import React, { useState } from "react";

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLeft, setCharLeft] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setCharLeft(50 - newTitle.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <strong>Judul :</strong> {charLeft} characters left
      </p>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <p>Catatan</p>
      <textarea
        placeholder="Write your note here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;

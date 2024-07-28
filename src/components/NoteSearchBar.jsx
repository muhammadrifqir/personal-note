// src/components/NoteSearchBar.jsx
import React from "react";

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

export default NoteSearchBar;

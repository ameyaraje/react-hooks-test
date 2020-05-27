import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const notesFromStorage = JSON.parse(localStorage.getItem('notes'));

  const [notes, setNotes] = useState(notesFromStorage || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title: title,
        body: body
      }
    ]);
    // console.log(notes);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div>
      <h1>Note App</h1>
      {notes.map((note) => {
        return (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>X</button>
            <p>----</p>
          </div>
        )
      }
    )}
      <p>Add Note</p>
      <form onSubmit={onFormSubmit}>
        <input value={title} onChange={onTitleChange}></input>
        <textarea value={body} onChange={onBodyChange}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

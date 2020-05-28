import React, { useEffect, useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ({ note }) => {
    useEffect(() => {
        console.log('Component INIT');

        return () => {
            console.log('END');
        };

    }, []);

    const { notesDispatch } = useContext(NotesContext);

    const removeNote = () => {
        notesDispatch({ type: 'REMOVE_NOTE', title: note.title });
    };

    return (
        <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={removeNote}>X</button>
            <p>----</p>
        </div>
    );
};

export default Note;
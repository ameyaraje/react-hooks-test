import React, { useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    const [notes, notesDispatch] = useReducer(notesReducer, []);
    
    useEffect(() => {
        const notesFromStorage = JSON.parse(localStorage.getItem('notes'));

        if (notesFromStorage) {
            notesDispatch({ type: 'POPULATE_NOTES', notes: notesFromStorage })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, notesDispatch}}>
            <h1>Note App</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    );
};

export default NoteApp;
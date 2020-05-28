import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { notesDispatch } = useContext(NotesContext);
    
    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onBodyChange = (e) => {
        setBody(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        notesDispatch({ type: 'ADD_NOTE', title: title, body: body });
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <p>Add Note</p>
            <form onSubmit={onFormSubmit}>
                <input value={title} onChange={onTitleChange}></input>
                <textarea value={body} onChange={onBodyChange}></textarea>
                <button>Add Note</button>
            </form>
        </div>
    );
};

export default AddNoteForm;
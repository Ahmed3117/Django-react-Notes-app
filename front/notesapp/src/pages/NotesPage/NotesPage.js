import React, { useEffect, useState } from 'react';
import Note from '../../components/Note/Note';
import CreateNote from '../../components/CreateNote/CreateNote';

const NotesPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        fetch('http://127.0.0.1:8000/notes/')
           .then(response => response.json())
           .then(data => {
                setNotes(data);
            })
           .catch(error => {
                console.error('Error fetching notes:', error);
            });
    };

    const createNote = (noteData) => {
        fetch('http://127.0.0.1:8000/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteData)
        })
           .then(response => {
                if (!response.ok) {
                    throw new Error('Error creating note');
                }
                return response.json();
            })
           .then(data => {
                console.log('Note created:', data);
                setNotes(prevNotes => [...prevNotes, data]);
            })
           .catch(error => {
                console.error('Error creating note:', error);
            });
    };

    return (
        <div>
            <CreateNote onCreateNote={createNote} />
            <h1>Notes ({notes.length})</h1>
            <div className='row'>
                {notes.map(note => (
                    <div className='col-4' key={note.id}>
                        <Note key={note.id} note={note} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesPage;

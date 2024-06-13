import React, { useEffect, useState } from 'react';
// import notes from '../../assets/data';
import Note from '../../components/Note/Note';
import CreateNote from '../../components/CreateNote/CreateNote';


const NotesPage = () => {
    let [notes,setNotes] = useState([])

    useEffect(() => {
        getNotes()
    },[])

    function getNotes() {
        fetch('http://127.0.0.1:8000/notes/')
        .then(response => response.json())
        .then(data => {
            setNotes(data)
        })
    }

    return (
        <div>
            <CreateNote />
            <h1>Notes ({notes.length})</h1>
            <div className='row'>
                {
                notes.map(note => {
                    return(
                        <div className='col-4'>
                            <Note key={note.id} note={note} />
                        </div>
                    )
                })
                }
            </div>
            
        </div>
    )
}

export default NotesPage;


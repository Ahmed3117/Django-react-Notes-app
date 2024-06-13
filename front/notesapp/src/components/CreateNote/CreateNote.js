import React, { useState } from 'react';

const CreateNote = ({ onCreateNote }) => {
    const [noteBody, setNoteBody] = useState('');

    const handleNoteChange = (event) => {
        setNoteBody(event.target.value);
    };

    const handleAddNote = () => {
        if (noteBody.trim()) {
            const noteData = { body: noteBody };
            onCreateNote(noteData);
            setNoteBody('');
        }
    };

    return (
        <div>
            <div className="form-group mb-3">
                <textarea 
                    className="form-control" 
                    placeholder='Add note...' 
                    value={noteBody} 
                    onChange={handleNoteChange}
                    id="newnote"
                />
            </div>
            <button 
                className="btn btn-primary" 
                onClick={handleAddNote}
                id="addNoteBtn"
            >
                Add Note
            </button>
        </div>
    );
};

export default CreateNote;

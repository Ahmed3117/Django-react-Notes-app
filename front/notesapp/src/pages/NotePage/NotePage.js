import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const NotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        getNote();
    }, [id]);

    const getNote = () => {
        fetch(`http://127.0.0.1:8000/notes/${id}/`)
            .then(response => response.json())
            .then(data => setNote(data))
            .catch(error => console.error('Error fetching note:', error));
    };

    const handleBodyChange = (event) => {
        const updatedNote = { ...note, body: event.target.value };
        setNote(updatedNote);
        updateNote(updatedNote);
    };

    const updateNote = (updatedNote) => {
        setIsSaving(true);
        fetch(`http://127.0.0.1:8000/notes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error updating note');
                }
                return response.json();
            })
            .then(data => {
                console.log('Note updated:', data);
                setNote(data);
            })
            .catch(error => console.error('Error updating note:', error))
            .finally(() => setIsSaving(false));
    };

    return (
        <Container className="mt-3">
            <Link to={`/`}>
                <Button variant="primary">Back</Button>
            </Link>
            <Form.Control
                as="textarea"
                rows={10}
                value={note?.body || ''}
                onChange={handleBodyChange}
                className="mt-3"
            />
        </Container>
    );
};

export default NotePage;








// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Button, Container, Form } from 'react-bootstrap';

// const NotePage = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [note, setNote] = useState(null);
//     const [isSaving, setIsSaving] = useState(false);

//     useEffect(() => {
//         getNote();
//     }, [id]);

//     const getNote = () => {
//         fetch(`http://127.0.0.1:8000/notes/${id}/`)
//             .then(response => response.json())
//             .then(data => setNote(data))
//             .catch(error => console.error('Error fetching note:', error));
//     };

//     const handleBodyChange = (event) => {
//         const updatedNote = { ...note, body: event.target.value };
//         setNote(updatedNote);
//     };

//     const updateNote = () => {
//         setIsSaving(true);
//         fetch(`http://127.0.0.1:8000/notes/${id}/`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(note)
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Error updating note');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Note updated:', data);
//                 setNote(data);
//                 navigate('/');
//             })
//             .catch(error => console.error('Error updating note:', error))
//             .finally(() => setIsSaving(false));
//     };

//     return (
//         <Container className="mt-3">
//             <Link to={`/`}>
//                 <Button variant="primary">Back</Button>
//             </Link>
//             <Form.Control
//                 as="textarea"
//                 rows={10}
//                 value={note?.body || ''}
//                 onChange={handleBodyChange}
//                 className="mt-3"
//             />
//             <Button
//                 variant="success"
//                 className="mt-3"
//                 onClick={updateNote}
//                 disabled={isSaving}
//             >
//                 {isSaving ? 'Saving...' : 'Save'}
//             </Button>
//         </Container>
//     );
// };

// export default NotePage;

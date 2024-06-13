import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import notes from '../../assets/data';
import { Link } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const NotePage = () => {
    const { id } = useParams();
    // let note = notes.find(note => note.id === Number(id));

    const [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [])
    function getNote(){
        fetch(`http://127.0.0.1:8000/notes/${id}/`)
        .then(response => response.json())
        .then(data => setNote(data))
    }


    return (
        
        <Container className="mt-3">
            <Link to={`/`}>
                <Button variant="primary">Back</Button>
            </Link>
            <Form.Control 
                as="textarea" 
                rows={10} 
                value={note?.body} 
                // onChange={handleBodyChange} 
                className="mt-3"
            />
        </Container>
    )
}

export default NotePage;

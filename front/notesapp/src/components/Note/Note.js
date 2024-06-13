import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
const Note = (props) => {
  return (
    
        <div class="card" Style="width: 18rem;">
            <div class="card-body">
                <div className='d-flex justify-content-end'>
                    <Link to={`/note/${props.note.id}`} className='btn btn-primary btn-sm mx-1'>  
                        <PencilSquare />
                    </Link>
                    <Button className='btn btn-danger btn-sm'>
                        <Trash />
                    </Button>
                </div>
                <Link to={`/note/${props.note.id}`} Style="text-decoration: none;">  
                    <p class="card-text" >{props.note.body}</p>
                </Link>
                
            </div>
        </div>

  )
}

export default Note;
import React from 'react'


const CreateNote = () => {
  return (
    <div>
        <div className="form-group mb-3">
          <textarea className="form-control" placeholder='add note ...' id="addTxt">
          </textarea>
        </div>
        <button className="btn btn-primary" id="addBtn">Add Note</button>
        
      </div>
  )
}

export default CreateNote;
import React from 'react'

const Note = (props) => {

    const selectNote = (ev) => {
        ev.preventDefault()
        props.storeActiveNote(props.note)
    }
    
    return (
    <li onClick={selectNote}>
        <div className="note">
        <div className="note-title">
            {props.note.title}
        </div>
        <div className="note-body">
            <p>
            {props.note.body}
            </p>
        </div>
        </div>
    </li>
    )
}

export default Note
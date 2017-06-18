import React from 'react'
import './NoteForm.css'

const Note = (props) => {

    const selectNote = (ev) => {
        ev.preventDefault()
        props.storeActiveNote(props.note)
    }

    const delNote = (ev) => {
        ev.preventDefault()
        props.deleteNote(props.note)
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
            <button
                className="success button"
                type="submit"
                onClick={delNote}
            >
            Delete
            </button>
        </div>
    </li>
    )
}

export default Note
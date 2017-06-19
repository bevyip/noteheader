import React from 'react'

import './Main.css'
import Sidebar from './SideBar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar notes={props.notes} activeNote={props.activeNote} saveNote2={props.saveNote2} />
      <NoteList notes={props.notes} storeActiveNote={props.storeActiveNote} deleteNote={props.deleteNote}/>
      <NoteForm activeNote={props.activeNote} storeActiveNote={props.storeActiveNote} saveNote={props.saveNote} blankNote={props.blankNote} />
    </div>
  )
}

export default Main
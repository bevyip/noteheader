import React from 'react'

import './Main.css'
import Sidebar from './SideBar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notes={props.notes} storeActiveNote={props.storeActiveNote}/>
      <NoteForm activeNote={props.activeNote} storeActiveNote={props.storeActiveNote} saveNote={props.saveNote} />
    </div>
  )
}

export default Main
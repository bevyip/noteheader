import React from 'react'
import NoteForm from './NoteForm.js'
import Sidebar from './Sidebar.js'
import NoteList from './NoteList.js'


const Main = () =>{
    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
         </div>
    )
}

export default Main
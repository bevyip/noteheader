import React from 'react'

import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'
import './SideBar.css'

const SideBar = (props) => {

 const handleSubmit = (ev) => {
   ev.preventDefault()
   props.saveNote2()
 }

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <button className="new-note" type="submit" onClick={handleSubmit}>
        <img src={newHover} alt="New note" />
        <img className="outline" src={newIcon} alt="New note" />
      </button>
    </div>
  )
}

export default SideBar
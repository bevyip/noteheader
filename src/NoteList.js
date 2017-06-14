import React, { Component } from 'react'
import './NoteList.css'

class NoteList extends Component{
  constructor(props){
    super(props)
  }

  addEntry(item,index){
    return (
            <li key={index}>
              <div className="note">
                <div className="note-title">
                  {item.noteTitle}
                </div>
                <div className="note-body">
                  <p>{item.noteBody}</p>
                </div>
              </div>
            </li>
    );
}
  render(){
    return(
        <div className="NoteList">
            <h3>Notes</h3>
              <ul id="notes">
                {this.props.entries.map(this.addEntry)}
            </ul>
         </div>
    );
  }
}

export default NoteList
import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      activeNote: {},
    }
  }

  storeActiveNote = (note) => {
    this.setState({activeNote: note})
  }

  deleteNote = (note) => {
    const notes = {...this.state.notes}
    delete notes[note.id]
    this.setState ({notes})
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes, activeNote: note })
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote} storeActiveNote={this.storeActiveNote.bind(this)} activeNote={this.state.activeNote} deleteNote={this.deleteNote}/>
      </div>
    );
  }
}

export default App;
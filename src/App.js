import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      activeNote: {},
    }
  }

  componentWillMount(){
    base.syncState(
      'notes', 
      {
        context: this,
        state: 'notes',
      }
    )
  }

  signedIn = () => {
    return true
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

  renderMain = () => {
    return (
      <div>
        <SignOut/ >
        <Main notes={this.state.notes} saveNote={this.saveNote} storeActiveNote={this.storeActiveNote.bind(this)} activeNote={this.state.activeNote} deleteNote={this.deleteNote}/>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn() ? this.renderMain() : <SignIn />
        }
      </div>
    );
  }
}

export default App;
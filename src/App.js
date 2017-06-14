import React, { Component } from 'react';
import './App.css';
import NoteForm from './NoteForm.js'
import Sidebar from './Sidebar.js'
import NoteList from './NoteList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <NoteList />
        <NoteForm />
      </div>
    );
  }
}

export default App;

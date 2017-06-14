import React, { Component } from 'react';
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props){
      super(props)
      this.updateBody = this.updateBody.bind(this)
      this.updateTitle = this.updateTitle.bind(this)
      this.addEntry = this.addEntry.bind(this)
      console.log(super.state)
      this.state={
        body: '',
        title: '',
      }
  }

  updateBody(ev){
    ev.preventDefault()
    this.setState({
      body: ev.target.value
    })
  }

  updateTitle(ev){
    ev.preventDefault()
    this.setState({
      title: ev.target.value
    })
  }

  addEntry(ev){
    const state = {...this.state}
    const entryLog ={
      noteTitle: this.state.title,
      noteBody: this.state.body,
    }
    super.state.entries.push(entryLog)
    this.setState(state)
  }

  render() {
    return (
      <div className="NoteForm">
          <form>
              <p>
                <input type="text" onChange={this.updateTitle} name="title" placeholder="Title your note" value="" />
              </p>
              <p>
                <textarea name="body" cols="30" rows="10" onChange={this.updateBody} placeholder="Just start typing..."></textarea>
              </p>
              <p>
                <button 
                  className="submit"
                  
                ><span>
                  Submit
                  </span>
                  </button>
              </p>
            </form>
        </div>
    );
  }
}

export default NoteForm;

import React, { Component } from 'react';
import './NoteForm.css'

class NodeForm extends Component {
  render() {
    return (
      <div className="NodeForm">
          <form>
              <p>
                <input type="text" name="title" placeholder="Title your note" value="" />
              </p>
              <p>
                <textarea name="body" cols="30" rows="10" placeholder="Just start typing..."></textarea>
              </p>
            </form>
        </div>
    );
  }
}

export default NodeForm;

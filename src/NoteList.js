import React, { Component } from 'react'
import './NoteList.css'

class NoteList extends Component{
  constructor(){
    super()
    this.state={
      entries:[
        {noteTitle: 'Citizens of distant epochs', noteBody: 'Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?'},
        {noteTitle:'Preserve and cherish that pale blue dot', noteBody: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"},
        {noteTitle: 'Laws of physics', noteBody: ' Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas'},
      ]
    }
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
              <ul id="notes" >
                {this.state.entries.map(this.addEntry)}
            </ul>
         </div>
    );
  }
}

export default NoteList
import React, { Component } from 'react'
import NoteForm from './NoteForm.js'
import Sidebar from './Sidebar.js'
import NoteList from './NoteList.js'


class Main extends Component{
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
   render(){
        return (
            <div className="Main">
                <Sidebar />
                <NoteList entries={this.state.entries}/>
                <NoteForm entries={this.state.entries}/>
            </div>
        )
   }
}

export default Main
import React, { Component } from 'react'

import { ChalkEntry } from './ChalkEntry'

/**
 * The test chalk entries to use during development.
 */
const entries = {
    '1234': { id: '1234', text: "Greg", x: 250, y: 250 },
    '5678': { id: '5678', text: "Aaron", x: 50, y: 750 },
    '9101': { id: '9101', text: "Ella", x: 1000, y: 233 },
    '1121': { id: '1121', text: "Issac", x: 500, y: 50 },
    '3141': { id: '3141', text: "Emma", x: 723, y: 564 },
    '5161': { id: '5161', text: "Wes", x: 710, y: 1100 }
}

/**
 * The chalkboard (canvas) where chalk entries (text) will be rendered.
 */
export class ChalkBoard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            entries: entries
        }

        this.handleDragEnd = this.handleDragEnd.bind(this)
        this.getEntriesView = this.getEntriesView.bind(this)
    }

    /**
     * Handles the setting of the entry position after dragging.
     * @param {number} id       The ID of the entry whose state to update.
     * @param {object} event    The resulting event object after dragging. 
     */
    handleDragEnd(id, event) {
        let newX = event.clientX
        let newY = event.clientY

        this.setState(previousState => {
            let entryToUpdate = previousState.entries[id]

            entryToUpdate.x = newX
            entryToUpdate.y = newY

            previousState.entries[id] = entryToUpdate
            return previousState
        })
    }

    /**
     * Gets the HTML view for each entry 
     */
    getEntriesView() {
        return Object.values(this.state.entries).map(entry => 
            <ChalkEntry 
                id={ entry.id }
                key={ entry.id }
                text={ entry.text }
                onDragEnd={ (event) => this.handleDragEnd(entry.id, event) }
                x={ entry.x }
                y={ entry.y }
            />
        )
    }

    /**
     * Renders the Chalkboard to the DOM.
     */
    render() {
        return (
            <div className="App">
                { this.getEntriesView() }
            </div>
        )
    }
}

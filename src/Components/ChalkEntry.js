import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * A text entry on the chalk board.
 */
export class ChalkEntry extends Component {
    constructor(props) {
        super(props)

        this.getStyle = this.getStyle.bind(this)
    }

    /**
     * Gets the style of the of the text entry.
     */
    getStyle() {
        return {
            fontSize: this.props.fontSize,
            position: 'absolute',
            left: this.props.x,
            top: this.props.y
        }
    }

    /**
     * Renders the text to the chalkboard.
     */
    render() {
        return (
            <p style={ this.getStyle() } draggable={ true } onDragEnd={ this.props.onDragEnd }>
                { this.props.text }
            </p>
        )
    }
}

/**
 * The Types of each prop passed to the component.
 */
ChalkEntry.propTypes = {
    /**
     * Specifies the text of the component on the chalkboard
     */
    text: PropTypes.string.isRequired,

    /**
     * The x coordinate (left) position of text on the chalkboard (normalized to 100).
     */
    x: PropTypes.number.isRequired,
    
    /**
     * The y coordinate (top) position of the text on the chalkboard (normalized to 100).
     */
    y: PropTypes.number.isRequired,

    /**
     * The function which handles the dragging of entries on the chalk board.
     */
    onDragEnd: PropTypes.func.isRequired,

    /**
     * The size of the text component on the chalkboard
     */
    fontSize: PropTypes.string,
}

/**
 * Specifies the default values for the component's props.
 */
ChalkEntry.defaultProps = {
    fontSize: '25px',
}
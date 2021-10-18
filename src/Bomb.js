import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        let message = this.state.secondsLeft ? this.state.secondsLeft + " seconds left before I go boom!": 'Boom!';

        
        return (
            <p>
                {message}
            </p>
        )
    }
}
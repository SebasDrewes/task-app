import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.items}</h1>
            </div>
        )
    }
}

export default Overview

import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h2 className="display-4 mb-3"><span className="text-danger">About</span> Contact Manager</h2>
                <p className="lead">Simple app to mange contacts</p>
                <p className="text-secondary">Version 1.0.0</p>
            </div>
        )
    }
}

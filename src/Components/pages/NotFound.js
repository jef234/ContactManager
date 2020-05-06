import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h2 className="display-4 mb-3"><span className="text-danger">404</span> Page Not Found</h2>
                <p className="lead">Sorry, that page does not exist</p>
            </div>
        )
    }
}

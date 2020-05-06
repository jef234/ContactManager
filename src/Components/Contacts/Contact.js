import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../Provider/Context'
import axios from 'axios'

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick = e => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    }

    onDeleteClick = (id,dispatch) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=>dispatch({type:'DELETE_CONTACT', payload: id}))
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}&nbsp;
                                <i onClick={this.onShowClick} className={showContactInfo ? "fas fa-caret-square-up":"far fa-caret-square-down"} style={{ cursor: 'pointer' }} />
                                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
                            </h4>
                            {showContactInfo ?
                                (<ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>)
                                : null}

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.protoType = {
    contact: PropTypes.object.isRequired
}

export default Contact;
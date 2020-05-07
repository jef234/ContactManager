import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = (props) => {
    let { branding } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-2">
            <div className="container">
                <img width="50" className="text-danger" src={logo} alt="React Logo" />
                <Link to="/" className="navbar-brand">
                    {branding}
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >
                                <i className="fas fa-home" /> Home</Link>
                        </ li>
                        <li className="nav-item">
                            <Link to="/Contacts/Add" className="nav-link" >
                                <i className="fas fa-plus-square" /> Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link" >
                                <i className="fas fa-info-circle" /> About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding: "My App"
}

Header.prototype = {
    branding: PropTypes.string.isRequired
}

export default Header


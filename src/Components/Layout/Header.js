import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import classnames from 'classnames'

const Header = (props) => {
    let { branding, navShow } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-2">
            <div className="container">
                <img width="50" className="text-danger" src={logo} alt="React Logo" />
                <a href="/ContactManager" className="navbar-brand">
                    {branding}
                </a>
                <button className="navbar-toggler" id="navbar-toggler" type="button" onClick={() => { console.log(navShow);navShow = !navShow; console.log(navShow)}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className='collapse navbar-collapse justify-content-end',}> */}
                <div className={classnames('collapse navbar-collapse justify-content-end', { 'd-block': navShow })}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/ContactManager" className="nav-link">
                                <i className="fas fa-home" /> Home</Link>
                        </ li>
                        <li className="nav-item">
                            <Link to="/ContactManager/Contacts/Add" className="nav-link">
                                <i className="fas fa-plus-square" /> Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ContactManager/About" className="nav-link">
                                <i className="fas fa-info-circle" /> About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding: "My App",
    navShow: true
}

Header.prototype = {
    branding: PropTypes.string.isRequired
}

export default Header


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigration = () => {
    const [show, setShow] = useState(false)

    const handled = () => {
        setShow(show => !show)
    }

    return (
        <div className={`${show ? 'openMenu' : ' '}`}>

            <button className="menu-trigger" onClick={handled}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="navbar">
                <button className="close-trigger" onClick={handled}>
                    <span></span>
                    <span></span>
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink exact to="/Home" className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/About" className="nav-link">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/Work" className="nav-link">Work</NavLink></li>
                    <li className="nav-item"><NavLink to="/Journal" className="nav-link">Journal</NavLink></li>
                    <li className="nav-item"><NavLink to="/Contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigration;


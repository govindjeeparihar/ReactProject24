import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink exact to="/Home">Mighty.</NavLink>
        </div>
    )
}

export default Logo;
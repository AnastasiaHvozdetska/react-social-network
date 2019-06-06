import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header  = () => {
    return (
        <header className="Header">
          <NavLink to="/profile">
            <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/b/b1/Phoenix-logo.svg/1220px-Phoenix-logo.svg.png"/>
          </NavLink>
        </header>
    )
}

export default Header;
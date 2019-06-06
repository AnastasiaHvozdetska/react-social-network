import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'
import Friends from './Friends/Friends';

const Navigation = (props) => {
    return (
        <nav className="Navigation">
          <ul>
            <li className="NavItem active">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="NavItem">
              <NavLink to="/dialogs">Messages</NavLink>
            </li>
            <li className="NavItem">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="NavItem">
              <NavLink to="/music">Music</NavLink>
            </li>
            <li className="NavItem">
              <NavLink to ="/settings">Settings</NavLink>
            </li>
          </ul>
        
          <Friends state={props.navigation.friends}  />
        </nav>
    )
}

export default Navigation;


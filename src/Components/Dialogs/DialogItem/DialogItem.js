import React from 'react';
import './DialogItem.scss'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className="Dialog">
            {props.name}
        </NavLink>
    )
}

export default DialogItem
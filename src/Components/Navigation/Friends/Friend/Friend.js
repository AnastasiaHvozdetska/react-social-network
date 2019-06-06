import React from 'react';
import './Friend.scss';

const Friend = (props) => {
    return (
        <div className="Friend">
            {props.name}
        </div>
    )
}

export default Friend;
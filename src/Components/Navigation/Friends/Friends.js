import React from 'react';
import './Friends.scss'
import Friend from './Friend/Friend';

const Friends = (props) => {
    return (
        <div className="Friends">
            {props.state.map((friendName, index )=> {
                return (
                    <Friend key={index} name={friendName.name} />
                )
            })}
        </div>
    )
}

export default Friends;
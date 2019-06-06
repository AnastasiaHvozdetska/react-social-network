import React from 'react';
import './Message.scss'


const MessageItem = (props) => {
    return (
        <div className="Message">
            { props.text }
        </div>
    )
}

export default MessageItem;
import React from 'react';
import './Dialogs.scss';

import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import { updateNewTextCreator, sendMessageCreator } from '../../Redux/dialogs-reducer';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewText(text)
    }

    return (
        <div className="Dialogs">
            <div className="DialogsWrapper">
                {state.dialogs.map((dialog, index) => {
                    return (
                        <DialogItem key={index} name={dialog.name} id={dialog.id} />
                    )
                })}
            </div>

            <div className="Messages">
                {state.messages.map((message, index) => {
                    return (
                        <MessageItem key={index} text={message.text} />
                    )
                })}

                <div>
                    <textarea 
                    value={newMessageText} 
                    placeholder='Enter your message' 
                    onChange={onNewMessageChange}></textarea>

                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
import React from 'react';

import Dialogs from './Dialogs'
import { updateNewTextCreator, sendMessageCreator } from '../../Redux/dialogs-reducer';
import './Dialogs.scss';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewTextCreator(text))
    }

    return <Dialogs updateNewText={onNewMessageChange} 
    sendMessage={onSendMessageClick}
    dialogsPage={state} />
}

export default DialogsContainer
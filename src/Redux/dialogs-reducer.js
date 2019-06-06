const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {
            id: 1,
            text: 'Hello'
        },
        {
            id: 2,
            text: 'It\'s me'
        },
        {
            id: 3,
            text: 'i was wondering if i could stay next to you'
        }
    ],
    dialogs: [
        {
            id: 1,
            name: 'Jack'
        },
        {
            id: 2,
            name: 'Tom'
        },
        {
            id: 3,
            name: 'Emma'
        }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case SEND_MESSAGE:
            let message = state.newMessageText;
            state.newMessageText = '';

            state.messages.push({
                id: 5,
                text: message
            })
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewTextCreator = (text) => (
    {type: 'UPDATE_NEW_MESSAGE_TEXT', text: text}
)

export default dialogsReducer;
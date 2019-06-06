import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'hi, how are you',
                    likes: 15
                },
                {
                    id: 2,
                    message: 'hi, 1',
                    likes: 12
                },
                {
                    id: 3,
                    message: 'hi, 2',
                    likes: 9
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        navigation: {
            friends: [
                {
                    name: 'Mia'
                },
                {
                    name: 'Nick'
                },
                {
                    name: 'Depression'
                }
            ]
        },
        newsPage: {
            news: [
                {
                    id: 1,
                    text: 'some text'
                },
                {
                    id: 2,
                    text: 'some text2'
                },
                {
                    id: 1,
                    text: 'some text3'
                },
                {
                    id: 1,
                    text: 'some text4'
                },
            ]
        },
    },
    _callSubscriber() {
        console.log(1)
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}

export default store
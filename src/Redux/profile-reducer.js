const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextAcionCreator = (text) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text}
)

export default profileReducer;
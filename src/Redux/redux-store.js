import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navigationReducer from "./navigation-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    naviagation: navigationReducer
});

let store = createStore(reducers);

export default store;
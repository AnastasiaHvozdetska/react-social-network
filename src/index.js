import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './Redux/redux-store';

import './index.css';


export let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
                dispatch={store.dispatch.bind(store)}
                store={store} 
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerender(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerender(state)
})



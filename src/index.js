import './styles.css'

import { applyMiddleware, createStore } from "redux";
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// Example Middleware
// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log('state: ', state);
//             console.log('action: ', action);
//             return next(action);
//         }
//     }
// }

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger),
    )    
);

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light';
    store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [addBtn, subBtn, asyncBtn, themeBtn]
        .forEach(el => el.disabled = state.btnDisabled);
});

store.dispatch({ type: 'INIT_APP' });
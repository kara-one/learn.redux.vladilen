import { BTN_DISABLED, BTN_ENABLED, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

import { combineReducers } from "redux";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if(action.type === DECREMENT) {
        return state - 1;
    } 
    
    return state;
}

const initThemeState = {
    value: 'light'
}

function themeReducer(state = initThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, value: action.payload };
            break;
        default: return state;
    }
}

function buttonDisabled(state = false, action) {
    switch (action.type) {
        case BTN_DISABLED:
            return true;
            break;
        case BTN_ENABLED:
            return false;
            break;
        default: return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    btnDisabled: buttonDisabled,
});
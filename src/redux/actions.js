import { BTN_DISABLED, BTN_ENABLED, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}
export function btnDisabled() {
    return {
        type: BTN_DISABLED
    }
}
export function btnEnabled() {
    return {
        type: BTN_ENABLED
    }
}
export function asyncIncrement() {
    return function (dispatch) {
        dispatch(btnDisabled());
        setTimeout(() => {
            dispatch(increment());
            dispatch(btnEnabled());
        }, 2000);        
    };
}
export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}
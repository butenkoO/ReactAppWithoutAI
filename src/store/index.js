import { configureStore  } from '@reduxjs/toolkit';

const ADD_DATA = 'ADD_DATA';

export const preloadedState = Object.freeze({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
});

const reducer = (state = preloadedState, action) => {
    switch(action.type){
        case ADD_DATA:
            return action.data;
    default:
        return state;
    }
};

export const updateForm = (data) => {
    return {
        type: ADD_DATA,
        data,
    }
};

export const store = configureStore({
    reducer,
    preloadedState,
});
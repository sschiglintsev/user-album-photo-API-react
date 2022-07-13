import {applyMiddleware, combineReducers, createStore} from 'redux'
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    photos: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
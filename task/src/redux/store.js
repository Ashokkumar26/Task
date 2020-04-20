// import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import taskReducer from "./task/taskReducer";

// const rootReducer = combineReducers({
//     task: taskReducer
// })

const store = createStore(taskReducer, applyMiddleware(thunk, logger));

export default store;

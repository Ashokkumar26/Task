import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import taskReducer from './task/taskReducer'

const rootReducer = combineReducers({
    task: taskReducer
})

const store = createStore(taskReducer, applyMiddleware(logger))

export default store
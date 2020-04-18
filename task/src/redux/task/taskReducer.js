import {ADD_TASK, OPEN_ADD_FORM, OPEN_EDIT_FORM, SAVE_TASK, DELETE_TASK, SWITCH_TO_LIST}  from './taskType'
import {LIST, ADD, EDIT} from "./modes"



// LIST MODE
// {type: "LIST"}
// ADD MODE
/// {type: "ADD"}
// EDIT MODE
// {type: "EDIT", task: Task}
const initialState = {
    mode: {
        type: LIST
    },
    isTrue: false,
    tasks: []
}

const updateTask = (tasks, task) => {
 const index = tasks.findIndex(currTask => currTask.id === task.id);
 return [...tasks.slice(0, index), task, ...tasks.slice(index+1)]
}

const removeTask = (tasks, task) => {
    const index = tasks.findIndex(currTask => currTask.id === task.id);
    return [...tasks.slice(0, index), ...tasks.slice(index+1)]
}

const taskReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TASK: return {
            ...state,
            mode: {
                type: LIST      
            },
            tasks: [...state.tasks, {...action.payload}]
        }
        case OPEN_ADD_FORM: return {
            ...state,
            mode: {
                type: ADD
            }
        }
        case OPEN_EDIT_FORM: return {
            ...state,
            mode: {
                type: EDIT,
                task: {...action.payload}
            }
        }
        case SAVE_TASK: return {
            ...state,
            mode: {
                type: LIST
            },
            tasks: updateTask(state.tasks, {...action.payload})
        }
        case DELETE_TASK: return {
            ...state,
            tasks: removeTask(state.tasks, {...action.payload})
        }
        case SWITCH_TO_LIST: return {
            ...state,
            mode: {
                type: LIST
            }
        }
        default: return state
    }
}
export default taskReducer
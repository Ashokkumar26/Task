import {ADD_TASK, OPEN_ADD_FORM, SAVE_TASK, OPEN_EDIT_FORM, DELETE_TASK, SWITCH_TO_LIST} from './taskType'

export const taskAction = (task) => {
    return {
    type: ADD_TASK,
    payload: task
} 
}

export const saveTaskAction = task => ({
    type: SAVE_TASK,
    payload: task
})

export const openEditAction = task => ({
    type: OPEN_EDIT_FORM,
    payload: task
})

export const openAdd = () => ({
    type: OPEN_ADD_FORM
})

export const removeTaskAction = task => ({
    type: DELETE_TASK,
    payload: task
})
export const switchToLIst = ()=> {
    return {
        type: SWITCH_TO_LIST
    }
}

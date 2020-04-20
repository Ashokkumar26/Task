import {
  ADD_TASK,
  OPEN_ADD_FORM,
  OPEN_EDIT_FORM,
  SAVE_TASK,
  DELETE_TASK,
  SWITCH_TO_LIST,
  SET_TASKS,
  SWITCH_ERROR,
  SWITCH_TO_LOADING,
} from "./taskType";
import { LIST, ADD, EDIT, LOADING, ERROR } from "./modes";

// LIST MODE
// {type: "LIST"}
// ADD MODE
/// {type: "ADD"}
// EDIT MODE
// {type: "EDIT", task: Task}
const initialState = {
  mode: {
    type: LOADING,
  },
  isTrue: false,
  tasks: [],
};

const updateTask = (tasks, task) => {
  const index = tasks.findIndex((currTask) => currTask.id === task.id);
  return [...tasks.slice(0, index), task, ...tasks.slice(index + 1)];
};

const removeTask = (tasks, task) => {
  const index = tasks.findIndex((currTask) => currTask.id === task.id);
  return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
};

const taskFromStageApi = ({ msg, task_date_string, id, task_time }) => ({
  id,
  description: msg,
  date: task_date_string,
  time: task_time,
});

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_TO_LOADING:
      return {
        ...state,
        mode: { type: LOADING },
      };
    case SWITCH_ERROR:
      return {
        ...state,
        mode: { type: ERROR, ...action.payload },
      };
    case SET_TASKS:
      return {
        mode: {
          type: LIST,
        },
        tasks: action.payload.map(taskFromStageApi),
      };
    case ADD_TASK:
      return {
        ...state,
        mode: {
          type: LIST,
        },
        tasks: [...state.tasks, { ...action.payload }],
      };
    case OPEN_ADD_FORM:
      return {
        ...state,
        mode: {
          type: ADD,
        },
      };
    case OPEN_EDIT_FORM:
      return {
        ...state,
        mode: {
          type: EDIT,
          task: { ...action.payload },
        },
      };
    case SAVE_TASK:
      return {
        ...state,
        mode: {
          type: LIST,
        },
        tasks: updateTask(state.tasks, { ...action.payload }),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: removeTask(state.tasks, { ...action.payload }),
      };
    case SWITCH_TO_LIST:
      return {
        ...state,
        mode: {
          type: LIST,
        },
      };
    default:
      return state;
  }
};
export default taskReducer;

import {
  ADD_TASK,
  OPEN_ADD_FORM,
  SAVE_TASK,
  OPEN_EDIT_FORM,
  DELETE_TASK,
  SWITCH_TO_LIST,
  SET_TASKS,
  SWITCH_ERROR,
  SWITCH_TO_LOADING,
} from "./taskType";
import axios from "axios";

const convertOurTaskToServerFormat = ({ date, description, time }) => ({
  assigned_user: "0",
  task_date: date,
  task_time: time,
  task_msg: description,
});

export const taskAction = (task) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .post(
        "https://stageapi.hellomail.io/task/5e7880dd7ea2f09e803e86fa",
        convertOurTaskToServerFormat(task),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NzksIm5iZiI6MTU4NzMwMzc3OSwianRpIjoiM2JiMTQ2ZDYtN2VlNi00NGFlLWEzMzYtZGVhMWU5MjdkN2YzIiwiaWRlbnRpdHkiOnsibmFtZSI6Im15IGRlYXIiLCJlbWFpbCI6Im15ZGVhcnN1YmlAZ21haWwuY29tIiwidXNlcl9pZCI6IjVlNzg4MGRhN2VhMmYwOWU4MDNlODZmNSIsImljb24iOiIifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.v-92QdDe0oISGfGG6LCS2k5PVtJkJXUURLW4fmsnMdo",
          },
        }
      )
      .then(
        () => {
          dispatch(fetchTasks());
        },
        () => {
          dispatch(somethingWentWrong());
        }
      );
  };
};

export const saveTaskAction = (task) => (dispatch) => {
  dispatch(loading());
  axios
    .put(
      `https://stageapi.hellomail.io/task/5e7880dd7ea2f09e803e86fa/${task.id}`,
      convertOurTaskToServerFormat(task),
      {
        "Content-Type": "application/json",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NzksIm5iZiI6MTU4NzMwMzc3OSwianRpIjoiM2JiMTQ2ZDYtN2VlNi00NGFlLWEzMzYtZGVhMWU5MjdkN2YzIiwiaWRlbnRpdHkiOnsibmFtZSI6Im15IGRlYXIiLCJlbWFpbCI6Im15ZGVhcnN1YmlAZ21haWwuY29tIiwidXNlcl9pZCI6IjVlNzg4MGRhN2VhMmYwOWU4MDNlODZmNSIsImljb24iOiIifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.v-92QdDe0oISGfGG6LCS2k5PVtJkJXUURLW4fmsnMdo",
        },
      }
    )
    .then(
      () => {
        dispatch(fetchTasks());
      },
      () => {
        dispatch(somethingWentWrong());
      }
    );
};

export const openEditAction = (task) => ({
  type: OPEN_EDIT_FORM,
  payload: task,
});

export const openAdd = () => ({
  type: OPEN_ADD_FORM,
});

export const removeTaskAction = ({ id }) => (dispatch) => {
  dispatch(loading());
  axios
    .delete(
      `https://stageapi.hellomail.io/task/5e7880dd7ea2f09e803e86fa/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NzksIm5iZiI6MTU4NzMwMzc3OSwianRpIjoiM2JiMTQ2ZDYtN2VlNi00NGFlLWEzMzYtZGVhMWU5MjdkN2YzIiwiaWRlbnRpdHkiOnsibmFtZSI6Im15IGRlYXIiLCJlbWFpbCI6Im15ZGVhcnN1YmlAZ21haWwuY29tIiwidXNlcl9pZCI6IjVlNzg4MGRhN2VhMmYwOWU4MDNlODZmNSIsImljb24iOiIifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.v-92QdDe0oISGfGG6LCS2k5PVtJkJXUURLW4fmsnMdo",
        },
      }
    )
    .then(
      () => {
        dispatch(fetchTasks());
      },
      () => {
        dispatch(somethingWentWrong());
      }
    );
};
export const switchToLIst = () => {
  return {
    type: SWITCH_TO_LIST,
  };
};

export const somethingWentWrong = () => ({
  type: SWITCH_ERROR,
  payload: { message: "Something Went Wrong" },
});

export const setActions = (tasks) => ({ type: SET_TASKS, payload: tasks });

const loading = () => ({ type: SWITCH_TO_LOADING });

export const fetchTasks = () => {
  return (dispatch, state) => {
    dispatch(loading());
    axios("https://stageapi.hellomail.io/task/5e7880dd7ea2f09e803e86fa", {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NzksIm5iZiI6MTU4NzMwMzc3OSwianRpIjoiM2JiMTQ2ZDYtN2VlNi00NGFlLWEzMzYtZGVhMWU5MjdkN2YzIiwiaWRlbnRpdHkiOnsibmFtZSI6Im15IGRlYXIiLCJlbWFpbCI6Im15ZGVhcnN1YmlAZ21haWwuY29tIiwidXNlcl9pZCI6IjVlNzg4MGRhN2VhMmYwOWU4MDNlODZmNSIsImljb24iOiIifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.v-92QdDe0oISGfGG6LCS2k5PVtJkJXUURLW4fmsnMdo",
      },
    }).then(
      ({ data: { results: tasks } }) => {
        dispatch(setActions(tasks));
      },
      (err) => {
        dispatch(somethingWentWrong());
      }
    );
  };
};

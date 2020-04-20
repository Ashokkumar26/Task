import React, { Component } from "react";
import { connect } from "react-redux";
import {
  taskAction,
  openAdd,
  openEditAction,
  saveTaskAction,
  removeTaskAction,
  switchToLIst,
} from "../redux/task/taskAction";
import { fetchTasks } from "../redux/task/taskAction";
import Body from "./Body";
import "./App.css";

class Task extends Component {
  render() {
    console.log(this.props.tasks);
    return (
      <div className="content">
        <div className="row border">
          <h4 className="col-10 p-0 mt-3 pl-2">TASKS</h4>
          <button
            className="col-2 btn btn-light m-0 p-0"
            onClick={this.props.openAdd}
          >
            <i
              className="material-icons"
              style={{ fontSize: "48px", color: "green" }}
            >
              add
            </i>
          </button>
        </div>
        <Body {...this.props}></Body>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  addTask: (task) => dispatch(taskAction(task)),
  openAdd: () => dispatch(openAdd()),
  openEdit: (task) => dispatch(openEditAction(task)),
  saveTask: (task) => dispatch(saveTaskAction(task)),
  removeTask: (task) => dispatch(removeTaskAction(task)),
  cancel: () => dispatch(switchToLIst()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);

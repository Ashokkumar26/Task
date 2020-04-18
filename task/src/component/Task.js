import React, { Component } from 'react'
import {connect} from 'react-redux'
import Calender from './Calender'
import {taskAction, openAdd, openEditAction, saveTaskAction, removeTaskAction, switchToLIst} from '../redux/task/taskAction'
import {LIST, ADD, EDIT} from "../redux/task/modes"
import shortid from "shortid";

const TaskList = ({tasks, edit, remove}) => 
    <table>
                    <thead>
                        <th>Description</th>
                        <th>User</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {tasks.map((task, i) => <tr key={i} onClick={() => edit(task)}>
                            <td>{task.description}</td>
                            <td>{task.user}</td>
                            <td>{task.date}</td>
                            <td><button onClick={e => {
                                remove(task);
                                e.stopPropagation();
                            }}>Remove</button></td>
                        </tr>)}
                    </tbody>
                </table>


const Body = ({mode: {type: mode, task: task}, tasks, addTask, openEdit, saveTask, removeTask, cancel}) => {
    switch(mode) {
        case LIST: return <TaskList tasks={tasks} edit={openEdit}remove={removeTask}/>
        case ADD: return <Calender onSave={task => {addTask({...task, id: shortid.generate()})}} onCancel={cancel} />
        case EDIT: return <Calender onSave={saveTask} task={task}  onCancel={cancel}/>
        default: return <h1>Undefined Mode</h1>
    }
} 

class Task extends Component {

    render() {
        console.log(this.props.tasks)
        return (
            <div>
                <h3>Task</h3>
                <button onClick={this.props.openAdd}>Add</button>
                <Body {...this.props}></Body>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
        addTask: task => dispatch(taskAction(task)),
        openAdd: () => dispatch(openAdd()),
        openEdit: task => dispatch(openEditAction(task)),
        saveTask: task => dispatch(saveTaskAction(task)),
        removeTask: task => dispatch(removeTaskAction(task)),
        cancel: () => dispatch(switchToLIst())
    })


export default connect(mapStateToProps, mapDispatchToProps)(Task)

import React from 'react'
import Calender from './Calender'
import {LIST, ADD, EDIT} from "../redux/task/modes"
import shortid from "shortid";
import './App.css'

const TaskList = ({tasks, edit, remove}) => 
    <table className='table'>
                    <tbody>
                        {tasks.map((task, i) => <tr className='row' key={i} onClick={() => edit(task)}>
                            <td  className='col-9'>{task.description}
                            <div>
                                <small className='text-danger'>
                                {task.date}
                                </small>
                            </div>
                            </td>
                            <td className='visibility col-3 mt-3'><button 
                            className='p-0 m-0 radius btn btn-light' onClick={e => {
                                remove(task);
                                e.stopPropagation();
                            }}>
                                <i className="material-icons m-0" style={{fontSize:"30px",color:"red"}}>delete_forever</i>
                                </button></td>
                            </tr>)}
                    </tbody>
                  </table>

const Body = ({mode: {type: mode, task}, tasks, addTask, openEdit, saveTask, removeTask, cancel}) => {
    switch(mode) {
        case LIST: return <TaskList tasks={tasks} edit={openEdit}remove={removeTask}/>
        case ADD: return <Calender onSave={task => {addTask({...task, id: shortid.generate()})}} onCancel={cancel} />
        case EDIT: return <Calender onSave={saveTask} task={task}  onCancel={cancel}/>
        default: return <h1>Undefined Mode</h1>
    }
}
export default Body
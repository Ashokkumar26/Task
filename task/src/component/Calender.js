import React, { Component } from 'react'
import './App.css'


const initialState = {
    task: {
        description: '',
        date: '',
        time: '',
        user: ''
    },
    descriptionError:'',
    dateError:'',
    isAlert:false
}
export class Calender extends Component {
    state = initialState

    validate = () => {
        let descriptionError= '';
        let dateError= '';
        if(!this.state.task.description){
            descriptionError='date cannot be blank'
        }
        if(!this.state.task.date){
            dateError='date cannot be blank'
        }
        if(descriptionError || dateError){
            this.setState({descriptionError,dateError})
            return false;
        }
        return true;
    }

    constructor({onSave, task}) {
        super({onSave, ...task})
        this.state = {
            task: task || initialState
        }
    }

    changeHandler = e => {
        this.setState({
            task: {...this.state.task, [e.target.name]: e.target.value}
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const isvalid = this.validate();
        if(isvalid){
            this.props.onSave && this.props.onSave(this.state.task);
            this.setState(initialState)
        }else{
            alert('Atleast description & date required')
            const isAlert=true
            this.setState({
                isAlert
            })
        }
    }

    render() {
        const { description, date, time, user } = this.state.task
        return (
            <div className='card'>
                <form>
                    <label>Task Description:</label><br />
                    <input type="text" name="description" className='form-control'
                    value={description} onChange={this.changeHandler} placeholder='description'/><br />
                    <div className='row'>
                        <div className='col-6'>
                    <label>Date:</label><br />
                    <input type="date" name="date" className='form-control' value={date} onChange={this.changeHandler} />
                    </div>
                    <div className='col-6'>
                    <label>Time:</label><br/>
                    <input type="time" name="time" className='form-control' 
                    placeholder='Time' value={time} onChange={this.changeHandler} /><br />
                    </div>
                    </div>
                    <label>Assign User:</label><br />
                    <input type="text" name="user" value={user} className='form-control' 
                    onChange={this.changeHandler} placeholder='name'/><br />
                    <button onClick={(e) => {
                        this.props.onCancel && this.props.onCancel(this.state.task)}}
                        className='btn btn-light ml-5 mr-3'>Cancel</button>
                    <button onClick={this.submitHandler} className='btn btn-success px-4'>Save</button>
                </form>
            </div>
        )
    }
}

export default Calender

import React, { Component } from 'react'


const initialState = {
    task: {
        description: '',
        date: '',
        time: '',
        user: ''
    }
}
export class Calender extends Component {
    state = initialState

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
    render() {
        const { description, date, time, user } = this.state.task
        return (
            <div>
                <form>
                    <label>Task Description:</label><br />
                    <input type="text" name="description" value={description} onChange={this.changeHandler} /><br />
                    <label>Date:</label><br />
                    <input type="date" name="date" value={date} onChange={this.changeHandler} />
                    <label>Time:</label>
                    <input type="time" name="time" value={time} onChange={this.changeHandler} /><br />
                    <label>Assign User:</label><br />
                    <input type="text" name="user" value={user} onChange={this.changeHandler} /><br /><br />
                    <button onClick={(e) => {
                        this.props.onCancel && this.props.onCancel(this.state.task)}}>Cancel</button>
                    <button type="submit" onClick={(e) => {
                        this.props.onSave && this.props.onSave(this.state.task);
                        this.setState(initialState)
                    }}>Save</button>
                </form>
            </div>
        )
    }
}

export default Calender

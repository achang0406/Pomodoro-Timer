import React from "react";
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../actions/todoActions';

class TodoList extends React.Component {
	constructor () {
		super();

		this.state = {
			value: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleSubmit (e) {
		e.preventDefault();

		this.props.todoActions.addItem(this.state.value);
		this.setState({ value: "" });
	}

	handleInput (e) {
		this.setState({
			value: e.target.value
		});
	}

	removeTask (index) {
		this.props.todoActions.removeItem(index);
	}

    render () {
        return (
            <div className="todos">
            	{ this.renderTasks() }
            	{ this.renderInput() }
            </div>
        );
    }

    renderTasks () {
    	return (
    		<div className="taskContainer">
    			<div className="tasks">
    				{
    					this.props.todos.map((todo,i) => {
				    		return (
				    			<div key={i} className="task">
					    			<span className="taskCount">{i+1}.</span>
					    			<span className="taskName">{todo}</span>
					    			<span className="deleteTask" onClick={this.removeTask.bind(this, i)}>X</span>
				    			</div>
				    		)
				    	})
    				}
    			</div>
    		</div>
		);
    }

    renderInput () {
    	return (
    		<form className="taskForm" onSubmit={this.handleSubmit}>
	    		<input className="taskInput" type="text" placeholder="enter task here.." value={this.state.value} onChange={this.handleInput} />
    		</form>
    	);
    }
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		todoActions: bindActionCreators(todoActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
import React from "react";

import Pomodoro from "./components/pomodoroTimer";
import TodoList from "./components/todoList";

export default class App extends React.Component {
    render() {
        return (
        	<div>
	            <Pomodoro />
	            <TodoList />
        	</div>
        );
    }
};

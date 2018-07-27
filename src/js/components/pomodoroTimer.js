import React from "react";

import { msToMin } from "../helper/time";

const timer = 1000 * 60 * 25; // 25 minutes
const breakTimes = [
	1000 * 60 * 5, // 5 minutes
	1000 * 60 * 10, // 10 minutes
	1000 * 60 * 15, // 15 minutes
	1000 * 60 * 30, // 30 minutes
];

export default class PomodoroTimer extends React.Component {
	constructor () {
		super();

		this.state = {
			timer: timer,
			breakIndex: 0,
		};

		this.renderStartOrStop = this.renderStartOrStop.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
		this.break = this.break.bind(this);
	}

	timer () {
		this.timerInterval = setInterval(() => {
			if (this.state.timer <= 0) return clearInterval(this.timerInterval);
			this.setState({ timer: this.state.timer - 1000 });
		}, 1000);
	}

	start () {
		this.timer();
		this.setState({
			timerStarted: true,
			breakIndex: 0,
		});
	}

	stop () {
		if (this.state.timer) {
			clearInterval(this.timerInterval);
			this.setState({ timerStarted: false });
		} else {
			this.reset();
		}
	}

	reset () {
		clearInterval(this.timerInterval);
		this.setState({
			timer: timer,
			timerStarted: false,
			breakIndex: 0,
		});
	}

	break () {
		let breakIndex = this.state.breakIndex;
		this.stop();
		clearTimeout(this.breakTimeout);
		this.breakTimeout = setTimeout(() => {
			this.setState({ breakIndex: 0 })
		}, 2000);

		if (this.state.timer === breakTimes[0]) breakIndex = 1;

		const newState = {
			timer: breakTimes[breakIndex],
		};

		if (breakIndex < breakTimes.length - 1) newState.breakIndex = breakIndex + 1;

		this.setState(newState);
	}

    render () {
        return (
            <div className="pomodoroTimer">
            	{this.renderTimer()}
            	{this.renderButtons()}
            </div>
        );
    }

    renderTimer () {
    	const formatTime =  msToMin(this.state.timer);
    	let className = "timer";
    	if (!this.state.timer) className += " alert";
    	document.title = `[ ${formatTime} ] Pomodoro Timer`;
    	return (
    		<div className={className}>
    			{formatTime}
    		</div>
    	);
    }

    renderButtons () {
    	return (
    		<div className="timerButtons">
            	{this.renderStartOrStop()}
	    		{this.renderReset()}
	    		{this.renderBreak()}
    		</div>
    	);
    }

    renderStartOrStop () {
    	if (this.state.timerStarted) {
    		return this.renderStop();
    	} else {
    		return this.renderStart();
    	}
    }

    renderStart () {
    	return (
    		<div className="timerButton" onClick={this.start}>Start</div>
    	)
    }

    renderStop () {
    	return (
    		<div className="timerButton" onClick={this.stop}>Stop</div>
    	)
    }

    renderReset () {
    	return (
    		<div className="timerButton" onClick={this.reset}>Reset</div>
    	)
    }

    renderBreak () {
    	return (
    		<div className="timerButton" onClick={this.break}>Break<span className="breakDuration">({breakTimes[this.state.breakIndex] / 60000} mins)</span></div>
    	)
    }

};

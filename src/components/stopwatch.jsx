import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../stopwatch.css'
import Laps from './sw-laps';
import StopwatchButtons from './sw-buttons';
import ToggleBtn from './sw-toggle-laps';
import { formatHourMinSec, formatMilliSec } from '../utility/timeFormatter';

class StopWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,

            isLapsOpen: true,
            timeElapsed: null,
            timeThen: null,
            lapTimers: [],
        };

        this.interval = null;

        document.addEventListener('keydown', (e) => {
            let { isRunning } = this.state
            if (e.keyCode == 32) {
                e.preventDefault();

                if (isRunning) this.handleStop();
                else this.handleStart();
            }
        });
    }


    clockLoop = () => {
        let timeThen;
        let timeDelta;
        let timeNow = Date.now();

        if (this.state.timeThen) {
            timeThen = this.state.timeThen;
        }
        else {
            timeThen = Date.now() - this.state.timeElapsed;
        }

        timeDelta = (timeNow - timeThen);
        this.setState({ timeElapsed: timeDelta, timeThen: timeThen });
    }

    handleStart = () => {
        this.interval = setInterval(this.clockLoop, 10);
        this.setState({ isRunning: true });
    }

    handleStop = () => {
        clearInterval(this.interval);
        this.setState({ isRunning: false, timeThen: null });
    }

    handleReset = () => {
        const { isRunning } = this.state;

        if (isRunning) this.handleStop();

        this.setState({
            timeElapsed: null,
            timeThen: null,
        });
    }

    handleLapReset = () => {
        this.setState({ lapTimers: [], listCellCount: [] });
    }

    handleLap = () => {
        const { timeElapsed, listSize, isLapsOpen } = this.state;
        let lapTimers = [...this.state.lapTimers];

        if (timeElapsed) {
            if (!isLapsOpen) this.handleLapsToggle();

            lapTimers.push({ lap: timeElapsed, listIndex: lapTimers.length + 1 });
            const listCellCount = Math.ceil((lapTimers.length) / listSize);

            this.setState({ lapTimers, listCellCount });
        }
    }

    handleLapsToggle = () => {
        let { isLapsOpen, lapTimers } = this.state;

        if (!isLapsOpen) this.setState({ isLapsOpen: true });
        else this.setState({ isLapsOpen: false });
    }



    render() {
        let { timeElapsed, isLapsOpen, listCellCount, lapTimers, listSize, isRunning } = this.state;
        return (
            <div className="stopwatch-app">
                <div className="clock-container">
                    <div className="container">


                        <div className="container clock">
                            <span className="hourMinSec">{formatHourMinSec(timeElapsed)}</span>
                            <span className="milliS">{formatMilliSec(timeElapsed)}</span>
                        </div>

                        <StopwatchButtons
                            onStart={this.handleStart}
                            onStop={this.handleStop}
                            onLap={this.handleLap}
                            onReset={this.handleReset}
                            isRunning={isRunning}
                        />

                        <ToggleBtn
                            onToggle={this.handleLapsToggle}
                            isLapsOpen={isLapsOpen}
                        />
                    </div>
                </div>
                <Laps
                    listCellCount={listCellCount}
                    lapTimers={lapTimers}
                    isLapsOpen={isLapsOpen}
                    listSize={listSize}
                    onLapReset={this.handleLapReset}
                />
            </div >
        );
    }
}

export default StopWatch;
import React, { Component } from 'react';
import { formatHourMinSec, formatMilliSec } from '../utility/timeFormatter';


class Laps extends Component {

    getContainerClasses = () => {
        let { isLapsOpen, lapTimers } = this.props;

        if (isLapsOpen && lapTimers.length > 6) return "laps-toggle-container open-auto"
        else if (isLapsOpen) return "laps-toggle-container open";
        if (!isLapsOpen) return "laps-toggle-container closed";
    }

    fillList = () => {
        let lapTimers = [...this.props.lapTimers];

        for (let i = 0; i < 5; i++) {
            if (!lapTimers[i]) {
                lapTimers.push({ lap: false, listIndex: '', keyID: Math.random() });
            }
        }
        return lapTimers;
    }


    render() {
        const { onLapReset, onDelete } = this.props;
        return (
            <React.Fragment>
                <div className={this.getContainerClasses()} >
                    <div className="container">
                        <div className="reset-btn-container">
                            <h5 className="reset-list-btn" onClick={onLapReset}> Reset list</h5>
                        </div>

                        {this.fillList().map((lap) => (
                            <li className="lap" key={lap.keyID}>
                                <span className="list-index">{'#' + lap.listIndex}</span>
                                <span className="lap-time">{lap.lap ? formatHourMinSec(lap.lap) + formatMilliSec(lap.lap) : '-'}</span>
                                {lap.lap ? <button onClick={() => onDelete(lap)} className="btn btn-danger btn-sm delete">Delete</button> : null}
                            </li>
                        ))}
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
export default Laps;

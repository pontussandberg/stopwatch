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
                lapTimers.push({ lap: false, listIndex: '', keyID: i + 1 });
            }
        }
        return lapTimers;
    }


    render() {
        const { onLapReset, lapTimers } = this.props;
        return (
            <React.Fragment>
                <div className={this.getContainerClasses()} >
                    <div className="container">
                        <div className="reset-btn-container">
                            <h5 className="reset-list-btn" onClick={onLapReset}> Reset list</h5>
                        </div>

                        {this.fillList().map(lap => (
                            <li className="lap" key={lap.laxIndex + 1 || lap.keyID}>
                                <span className="list-index">{'#' + lap.listIndex}</span>
                                <span className="lap-time">{lap.lap ? formatHourMinSec(lap.lap) + formatMilliSec(lap.lap) : '-'}</span>
                            </li>
                        ))}
                    </div>






                    {/* <div className="container">
                        <div className="lap-btn-container">
                            <button onClick={onLapReset} className="btn-custom btn-secondary m-0">Reset laps</button>
                        </div>
                        <div className="laps-container">
                            {this.createList()}
                        </div>
                    </div> */}
                </div>
            </React.Fragment >
        );
    }
}
export default Laps;

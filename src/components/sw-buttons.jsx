import React, { Component } from 'react';



class StopwatchButtons extends Component {
    render() {
        const btnClass = "btn-custom button-5";
        return (
            <React.Fragment>
                <div className="btn-container">
                    <div className={btnClass} onClick={this.props.onStart} >
                        <h4 href="#">Start</h4>
                        <div className="translate"></div>
                    </div>

                    <div className={btnClass} onClick={this.props.onStop} >
                        <h4 href="#">Stop</h4>
                        <div className="translate"></div>
                    </div>

                    <div className={btnClass} onClick={this.props.onLap} >
                        <h4 href="#">Lap</h4>
                        <div className="translate"></div>
                    </div>

                    <div className={btnClass} onClick={this.props.onReset} >
                        <h4 href="#">Reset</h4>
                        <div className="translate"></div>
                    </div>
                </div >
            </React.Fragment >
        );
    }
}
export default StopwatchButtons;
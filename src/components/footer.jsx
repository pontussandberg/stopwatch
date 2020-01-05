import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer>
                <div className="container">
                    <h1>Stopwatch</h1>

                    <div className="social-media">
                        <div className="facebook media-icons"></div>
                        <div className="twitter media-icons"></div>
                        <div className="instagram media-icons"></div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
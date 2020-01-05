import React from 'react';

function ToggleBtn(props) {
    const { isLapsOpen, onToggle } = props;
    return (
        <div className={
            isLapsOpen ? "toggle-icon-active toggle-icon" : "toggle-icon"}
            onClick={onToggle}>

            <div id={isLapsOpen ? "toggle-line-1-active" : "toggle-line-1"}></div>
            <div id={isLapsOpen ? "toggle-line-2-active" : "toggle-line-2"}></div>
        </div>
    );
}

export default ToggleBtn;
//DevTo AryanJ Tutorial commented out sections
import moment from 'moment';
import React from 'react';

/*export default class Break extends Component {
    render() {
        const btnClassName = this.props.isStart ? 'disable' : '';

        return(
            <div className="break-container">
                <label id="break-label">Break Length</label>
                <div>
                    <button className={btnClassName} id="break-increment" onClick={this.props.onIncreaseBreak}>
                      <i className="fa fa-plus-square"> </i>  
                    </button>
                    <span id="break-length">{this.props.breakLength}</span>
                    <button className={btnClassName} id="break-decrement" onClick={this.props.onDecreaseBreak}>
                        <i className="fa fa-minus-square"></i>
                    </button>
                </div>
            </div>
        )
    }
}*/




const Break = ({
    breakLengthSeconds,
    incrementBreakLength,
    decrementBreakLength,
    }) => {
    const breakLengthMinutes = moment.duration(breakLengthSeconds, "s").minutes();  

    return (
        <div className="break-container">
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthMinutes}</p>
            <div className="break-btn">
                <button className="break-ctrl-btn" id="break-increment" onClick={incrementBreakLength}>
                    <i class="fa fa-plus-square"></i>
                </button>
                <button className="break-ctrl-btn"
                id= "break-decrement" onClick={decrementBreakLength}>
                    <i class="fa fa-minus-square"></i>
                </button>
            </div>
        </div>
    );
};

export default Break; 
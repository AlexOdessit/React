import React, { Component } from 'react';
import './style.css';
import { format, add } from 'date-fns';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(0, 0, 0, 0, 0, 0),
      timerId: null,
    };
  }

  start = () => {
    const { date } = this.state;
    const newDate = add(date, { seconds: 1 });

    const timerId = setTimeout(this.start, 1000);
    this.setState({
      date: newDate,
      timerId: timerId,
    });
  };

  stop = () => {
    const { timerId } = this.state;
    clearTimeout(timerId);
    this.setState({
      timerId: null,
    });
  };

  restart = () => {
    this.setState({
      date: new Date(0, 0, 0, 0, 0, 0),
    });
  };

  // componentDidMount() {
  //   this.start();
  // }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const start = this.start;
    const stop = this.stop;
    const { date, timerId } = this.state;
    const timeToText = format(date, 'HH:mm:ss');
    return (
      <div className='timer-wrap'>
        <p className='timer'>{timeToText}</p>
        <button onClick={!timerId ? start : stop}>
          {!timerId ? 'Start Timer' : 'Stop Timer'}
        </button>
        {/* //restart timer click */}
        <button onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

export default Timer;

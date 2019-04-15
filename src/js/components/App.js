import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
    error: null,
    finished: false,
  };

  handleClick = btn => {
    this.setState(prevState => {
      const dataObj = Object.assign(prevState);
      if (prevState.finished && !isNaN(btn)) dataObj.total = null;
      return calculate(dataObj, btn);
    });
  };

  render() {
    const { total, next, error } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Display displayArgs={{ total, next, error }} />
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;

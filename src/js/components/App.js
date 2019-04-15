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
  };
  handleClick = btn => {
    this.setState(prevState => calculate(prevState, btn));
  };

  render() {
    const { total, next, error } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Display
            display={error === null ? (next === null ? total : next) : error}
          />
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;

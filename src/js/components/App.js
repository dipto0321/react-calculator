import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };
  handleClick = btn => {
    this.setState(prevState => calculate(prevState, btn));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Display
            display={next === null ? total : next}
          />
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;

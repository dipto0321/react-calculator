import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {

  };
  render() {
    return <div className="App">
      <div className="container">
        <Display/>
        <ButtonPanel/>
      </div>
    </div>;
  }
}

export default App;

import React, { Component } from 'react';
import '../../css/components/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {

  };
  render() {
    return <div className="App">
      <Display/>
      <ButtonPanel/>
    </div>;
  }
}

export default App;

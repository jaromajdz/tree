import React, { Component } from 'react';
import './App.css';

import Tree from './components/Tree/Tree';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tree app</h1>
        </header>

      <div><Tree/></div>
      </div>
    );
  }
}

export default App;

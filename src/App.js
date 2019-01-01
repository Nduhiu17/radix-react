import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sale from './Sale';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Sale/>
      </div>
    );
  }
}

export default App;

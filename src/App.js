import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



//thes are the components that I need//
//NavBar
//Profile
//Trending
//Timeline
//Who To Follow
//Copyright

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">United to react.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/NavBar.jsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import mtg from 'mtgsdk';


import CardList from 'components/CardList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Magic The Gathering</h2>
        </div>
        <CardList />
      </div>
    );
  }
}

export default App;

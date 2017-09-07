import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import mtg from 'mtgsdk';
import {
  Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import CardList from 'components/CardList';
import MTGCard from 'components/MTGCard';


const customHistory = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Magic The Gathering</h2>
        </div>
        <Router history={customHistory}>
          <div>
            <Route exact path="/" component={CardList}/>
            <Route path="/card/:id" component={MTGCard}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

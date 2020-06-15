import React from 'react';
import './App.css';

import Home from './pages/Home/Home'
import Detail from './pages/Details';

import { Route, Link } from 'wouter';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
        </Link>
        <Route path="/" component={Home}/>
        <Route path="/profile/:id" component={Detail}/>
      </div>
    );
  
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import index from './components/index';
import create from './components/create';
import show from './components/show';
import deleteData from './components/deleteData';

import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="/" component={index} />
              <Route path="/create" component={create} />
              <Route path="/show" component={show} />
              <Route path="/delete" component={deleteData} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

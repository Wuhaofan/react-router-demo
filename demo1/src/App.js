import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Nav from './containers/Nav/Nav'
import Home from './containers/Home/Home'
import Content from './containers/Content/Content'
import Log from './containers/Log/Log'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch> 
            <Route component={Nav} path='/' exact />
            <Route component={Home} path='/home' />
            <Route component={Content} path='/page' />
            <Route component={Log} path='/log' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

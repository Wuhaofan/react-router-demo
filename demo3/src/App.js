import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Other from './containers/Other/Other'
import Home from './containers/Home/Home'
import Content from './containers/Content/Content'
import Log from './containers/Log/Log'

// 判断是否支持 HTML5 history API
const supportsHistory = !('pushState' in window.history)
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter
            forceRefresh={supportsHistory} // false: 不刷新 true: 刷新
            keyLength={12} // location.key长度为12
        >
          <Switch> 
            <Route component={Home} path='/' exact /> 
            <Route component={Content} path='/content' />
            <Route component={Log} path='/log' /> 
            <Route component={Other} path='/other' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

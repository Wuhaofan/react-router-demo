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
            basename='/web'
            forceRefresh={supportsHistory} // false: 不刷新 true: 刷新
            keyLength={12} // location.key长度为12
        >
          <Switch> 
            <Route component={Home} path='/home' exact /> // 实际路径 /web/home
            <Route component={Content} path='/content' /> // 实际路径 /web/page
            <Route component={Log} path='/log' />  // 实际路径 /web/log
            <Route component={Other} path='/other' /> // 实际路径 /web/other
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

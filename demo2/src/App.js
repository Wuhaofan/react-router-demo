import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './containers/Nav/Nav'
import Home from './containers/Home/Home'
import Content from './containers/Content/Content'
import Log from './containers/Log/Log'

// 导航前的函数
const getConfirmation = (message, callback) => {
const allowTransition = window.confirm(message)
  callback(allowTransition)
}
// 判断是否支持 HTML5 history API
const supportsHistory = !('pushState' in window.history)
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter
            basename='/web'
            getUserConfirmation={getConfirmation('hello world', () => {console.log('success')})}
            forceRefresh={supportsHistory} // false: 不刷新 true: 刷新
            keyLength={12} // location.key长度为12
        >
          <Switch> 
            <Route component={Nav} path='/' exact /> // 实际路径 /web
            <Route component={Home} path='/home' /> // 实际路径 /web/home
            <Route component={Content} path='/content' /> // 实际路径 /web/page
            <Route component={Log} path='/log' />  // 实际路径 /web/log
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Home = () => (
  <div>我是主页</div>
)
const Page = () => (
  <div>我是内容</div>
)
const Log = () => (
  <div>我是日志</div>
)
const Main = () => (
  <div>
    <Link to='/home'>
    主页
    </Link>
    <Link to='/page'>
    内容
    </Link>
    <Link to='/log'>
    日志
    </Link>
  </div>
)
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}
const supportsHistory = !('pushState' in window.history)
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter
            basename='/web'
            getUserConfirmation={getConfirmation('hello world', () => {console.log('loaded')})}
            forceRefresh={supportsHistory}
            keyLength={12}
            children={() => (<div>我是子元素</div>)}
        >
          <Switch> 
            <Route component={Main} path='/' exact />
            <Route component={Home} path='/home' />
            <Route component={Page} path='/page' />
            <Route component={Log} path='/log' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Settings from './Components/Settings'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/settings' component={Settings}/>     
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)

import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import './App.css'

// COMPONENTS
import Home from './Components/Home'
import About from './Components/About'
import Settings from './Components/Settings'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* BOOSTRAP NAV */}
        <Nav tabs>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/settings">Settings</NavLink>
          </NavItem>
        </Nav>
        {/* ROUTES */}
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

import React, { Component } from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom'

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <h2>{title}</h2>
    </div>
    <p className="App-intro">
      This is the {title} page.
      </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
  </div>
);

const Home = (props) => (
  <Page title="Home" />
);

const About = (props) => (
  <Page title="About" />
);

const Settings = (props) => (
  <Page title="Settings" />
);

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
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

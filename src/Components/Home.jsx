import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>homie</div>
    )
  }
}

export default withRouter(Home)
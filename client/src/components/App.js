import React, { Component } from 'react'
import { Route } from 'react-router'
import { Register, Login } from './Auth'
import Jokes from './Jokes'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/jokes' component={Jokes} />
      </div>
    )
  }
}
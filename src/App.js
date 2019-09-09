import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/category/:title' render={() => <h1>Category</h1>} />
      </Switch>
    )
  }
}

export default App;

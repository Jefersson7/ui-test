import React from 'react'
import './Sass/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

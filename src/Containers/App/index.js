import React from 'react'
import './Sass/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import ContactUs from '../ContactUs'
import HowItWorks from '../HowItWorks'
import Login from '../Login'
import PastTrials from '../PastTrials'
import PrivacyPolicy from '../PrivacyPolicy'
import ThermsAndConditions from '../ThermsAndConditions'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/how-it-works' component={HowItWorks} />
        <Route path='/login' component={Login} />
        <Route path='/past-trials' component={PastTrials} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/therms' component={ThermsAndConditions} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactState from './context/contact/ContactState'

import ContactState from './context/contact/ContactState'

const App = () => {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  )
}

export default App

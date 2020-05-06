import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Contacts from './Components/Contacts/Contacts';
import AddContact from './Components/Contacts/AddContact';
import Header from './Components/Layout/Header';
import About from './Components/pages/About'
import NotFound from './Components/pages/NotFound'
import { Provider } from './Provider/Context';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/Contacts/Add" component={AddContact} />
              <Route exact path="/About" component={About} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App;

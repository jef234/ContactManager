import React from 'react';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import AddContact from './Components/Contacts/AddContact';

import { Provider } from './Provider/Context'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  )
}

export default App;

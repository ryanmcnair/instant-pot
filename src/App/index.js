import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from '../helpers/routes';
import firebase from '../helpers/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState[{}];
  const [loading, setLoading] = useState[false];

  const ref = firebase.firestore().collection('instantpot-1a7a1-default-rtdb');

  if(loading){
    return <h1>...Loading</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Instant Pot Helper
        </h1>
        <Router>
          <MyRoutes />
        </Router>
      </header>
    </div>
  );
}

export default App;

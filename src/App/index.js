import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from '../helpers/routes';
import fbConnection from '../helpers/connection';
import 'bootstrap/dist/css/bootstrap.min.css';

fbConnection();

function App() {
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

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login.js';
import Protected from './components/Protected.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
        </div>  
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/protected' component={Protected}/>
      </div>
    </Router>
  );
}

export default App;

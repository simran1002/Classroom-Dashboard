import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;

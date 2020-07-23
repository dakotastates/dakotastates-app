import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <div className="header">
        <Navbar />
      </div>

      <Switch>

          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Home} />

        </Switch>

    </Router>
    </div>
  );
}

export default App;

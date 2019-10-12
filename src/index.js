import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <App />
    <Route exact path="/" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

import Home from "./components/Home/Home";
import Blog from './components/Blog/Blog';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
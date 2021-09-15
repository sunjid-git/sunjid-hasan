import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import NoMatch from "./components/NoMatch/NoMatch";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header/>
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

        <Route path="*">
          <NoMatch />
        </Route>
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

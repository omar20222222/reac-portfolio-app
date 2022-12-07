import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomeHome";
import About from "./components/About";
import Projects from "./components/Project";
import footer from "./components/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

{
  return (
    <Router>
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

function App() {
  return <div>lol</div>;
}

export default App;

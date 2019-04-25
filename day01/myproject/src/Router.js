import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";

class MyRouter extends Component{
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>

          <Route path="/go" component={GoHere}/>
        </div>
      </Router>
    );
  }
}


function GoHere() {
  return (
    <div>
      <h2>你好</h2>
    </div>
  );
}

export default MyRouter



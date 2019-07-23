import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ThirdD from "./demo/ThirdD/ThirdD";
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";


class MyRouter extends Component{
  render() {
    return (
      <BrowserRouter>
        <Switch> {/*只匹配其中一个*/}
          {/*<Route exact path="/" component={Home}/>*/}
          <Route path="/about" component={About}/>
          <Route path="/go" component={GoHere}/>
          <Route path="/3d" component={ThirdD}/>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </BrowserRouter>
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



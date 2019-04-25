import React, {Component} from 'react'
import { Link } from "react-router-dom";
import Header from "../../components/Header";

class Home extends Component{
  render() {
    return (
      <div>
        <Header />
        <div>这是主页</div>
        <br/>
        <br/>
        <Link to="/about">about</Link>
      </div>
    );
  }
}

export default Home

import React, {Component} from "react";

/**
 * 管理的组件
 */
export default class Admin extends Component{

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  handleClick(number, e) {
    console.log(number, "  ", e)
  }
  render() {
    return (
      <div>
        <h1>Admin页面</h1>

        <button onClick={this.handleClick.bind(this,this.state.number)}></button>
      </div>
    )
  }
}

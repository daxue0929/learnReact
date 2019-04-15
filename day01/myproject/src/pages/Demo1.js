import React,{Component} from "react";

class Demo1 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      apple: '大苹果',
      orange: '橘子',
      ban: '香蕉',
      date: new Date()
    }
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
    //卸载组件之前的生命周期钩子
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>{this.state.apple}</li>
          <li>{this.state.orange}</li>
          <li>{this.state.ban}</li>
        </ul>
        <hr />
        <button onClick={() => this.setState({ban: '小香蕉'})}>香蕉变小</button>
        <br/>
        <button onClick={() => this.setState({ban: '大香蕉'})}>香蕉变大</button>
        <hr/>
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }


}

export default Demo1



import React, {Component} from 'react'

class Header extends Component{
  bodyStyle = {
    width:'1080px',
    height:'90px',
    margin:'0px auto',
    backgroundColor:'#F7FFBE'
  }
  asideList = {
    width:'300px',
    backgroundColor:'#D4FF9C',
    display:'flex',
    flexDirection:'row',
    flexWrap:'nowrap',
    justifyContent:'space-between'
  };
  render() {
    return (
      <div style={this.bodyStyle}>
        <ul style={this.asideList}>
          <li><a href="/">Home</a></li>
          <li><a href="/" title='暂未开放'>Find</a></li>
          <li><a href="/" title='暂未开放'>Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    );
  }
}

export default Header

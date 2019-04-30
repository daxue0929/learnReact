import React, {Component} from 'react'
import './ThirdD.scss'
class ThirdD extends Component{
  render() {
    return (
      <div className='wrap'>
        <div className='cube'>
          <div className='front'>前爱情</div>
          <div className='back'>后面包</div>
          <div className='right'>右事业</div>
          <div className='left'>左亲情</div>
          <div className='top'>上友情</div>
          <div className='bottom'>下深渊</div>
        </div>
      </div>
    );
  }
}

export default ThirdD

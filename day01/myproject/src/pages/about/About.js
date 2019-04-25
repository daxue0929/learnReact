import React, { Component } from 'react'
import './About.scss'

class About extends Component {
  render() {
    return (
      <div className='my-resume'>
        <div className='main'>
          <div className='person-info'>
            <div className='name'>王雪迪</div>
            <div>
              <ul>
                <div className='left'>
                  <li>电话:<span>17344615861</span></li>
                  <li>邮箱:<span>daxue0929@qq.com</span></li>
                </div>
                <div className='right'>
                  <li>现居地:<span>北京市石景山区</span></li>
                  <li>应聘岗位:<span>前端开发工程师</span></li>
                </div>
              </ul>
            </div>
          </div>
          <div className='education-bg'>
            <div className='title'>
              <div>教育背景</div>
            </div>
            <div className='article'>
              <span>郑州商学院</span>
              <span>2015年---2019年</span>
              <span>计算机科学与技术</span>
            </div>
          </div>
          <div className='person-technology'>
            <div className='title'>
              <div>个人技术</div>
            </div>
          </div>
          <div className='peoject-experience'>
            <div className='title'>
              <div>项目经验</div>
            </div>
          </div>
          <div className='person-summary'>
            <div className='title'>
              <div>个人总结</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About

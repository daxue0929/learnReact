/**
 * 能发送异步ajax请求的函数模块
 * 封装axios库
 * 函数的返回值是promise对象
 *  1. 优化1: 统一处理请求异常
 *    在外层包一个promise对象
 *    在请求出错时,不reject(error),而是显示错误提示
 *  2. 优化2: 异步得到不是reponse,而是reponse.data
 *    在请求成功resolve时:resolve(reponse.data)
 */

import axios from 'axios'
import {message} from 'antd'

export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH:'PATCH'
};

export default function _ajax(url, data={}, type='GET') {
  if (type === 'GET') { //发送GET请求
    return new Promise(resolve => {
      axios.get(url, {
        params: JSON.stringify(data),  //指定请求参数
        headers: {'dataType': 'json', 'Content-Type': 'application/json;charset=UTF-8'}
      }).then((res) => {
        resolve(res)
      }).catch(error => {
        message.error("请求错误信息:" + error)
      })
    })
  } else { //发送POST请求
    return new Promise(resolve => {
      axios.post(
        url, JSON.stringify(data),
        {headers: {'dataType': 'json', 'Content-Type': 'application/json;charset=UTF-8'}
        }).then((res) => {
        resolve(res);
      }).catch(error => {
        message.error("请求错误信息:"+ error)
      })
    })
  }
}

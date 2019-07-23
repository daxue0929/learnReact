/**
 * 包含应用中所有
 * 接口请求函数的模块
 * 对每个接口进行封装
 */

import _ajax from './ajax'

// 登录
export const reqLogin = (username, password) => _ajax('/login', {username, password}, 'POST')  //ctrl + 鼠标左键会进入这个函数的实现中去  alt + 左键  回退}





//腾祥智黑简-W5

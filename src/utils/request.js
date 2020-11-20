/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

// 之前设置baseURL
// axios.defaults.baseURL = 'https://api.example.com'
/*
我们可能有这样的需求：
  例如我们有多个不同路径的请求接口
    http://127.0.0.1:3000
    http://hello.com
  axios.create 这是复制了一个axios，不同的axios实例可以有不同的配置，而且不会冲突。复制出来的axios和axios本身的功能一模一样
    例如：
      const req = axios.create()
      req.defaults.baseURL = 'http://127.0.0.1:3000'

      const req2 = axios.create()
      req2.defaults.baseURL = 'http://hello.com'
*/

/* 创建一个axios实例 ，也就是复制了一个axios，我们通过这个实例去发请求，把需要的配置给这个实例去处理 */
const request = axios.create({
  // 请求的基础路径
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 导出请求方法
export default request

// 谁要使用，谁就加载这个request模块
/* import request from 'request.js'
request.xxx
request({
    method:
    URL:''
}) */

/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

/* 创建一个axios实例 ，也就是复制了一个axios，我们通过这个实例去发请求，把需要的配置给这个实例去处理 */
// eslint-disable-next-line no-unused-vars
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'// 请求的基础路径
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

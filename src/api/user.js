/* 用户相关请求模块 */
import request from '@/utils/request'
// 用户登陆
// 1.先用export导出login
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    // data 用来设置POST请求体
    data: data
  })
}
// 获取用户信息
/* export const getUserInfo = () = > {

} */

// 修改用户信息

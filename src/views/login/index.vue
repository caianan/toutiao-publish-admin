<template>
    <div class="login-container">
      <!--
        el-form 表单组件
        每个表单项都必须使用 el-form-item 组件包裹
       -->
      <div class="login-head">
        <img src="./logo_index.png" alt="">
      </div>
      <!--
        配置form表单验证：
          1.必须给el-form组件绑定 model 为表单数据对象
          2.给需要验证的表单项 el-form-item 绑定prop属性
            注意：prop 属性需要指定表单对象中的数据名称
          3.给 el-form 组件的 rules 属性配置验证规则
            具体的验证规则可以参考：查看文档
            如果内置的验证规则不满足，也可以自定义验证规则
        手动触发表单
          1.给 el-form 设置ref 起个名字（随便起名，不要重复即可）
          2.通过 ref 获取 el-form 组件，调用组件的 validate 方法进行验证
      -->
      <el-form
        class="login-form"
        ref="login-form"
        :model="user"
        :rules="formRules"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="user.mobile"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="user.code"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="user.agree">
            我已阅读并统一用户协议和隐私条款
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            :loading="loginLoading"
            @click="onLogin"
          >登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import { login } from '@/api/user.js'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      // checked: false, // 默认是false，是否统一协议的选中状态
      loginLoading: false, // 登陆的loading状态
      formRules: {
        // 表单验证规则属性
        // 要验证的数据名称：规则列表[]
        // required:true 说明这个表单项为必填项;
        // messsage:提示信息；
        // trigger:触发验证的机制
        //    blur:表示失去焦点的时候触发验证
        //    change:表示在改变的过程中触发验证
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'change' }
        ],
        agree: [
          {
            // 自定义校验规则
            // 验证通过:callback()
            // 验证失败:callback(new Error('错误消息'))
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      /* 获取表单数据（根据接口要求绑定数据） */
      // const user = this.user
      /* 表单验证 */
      this.$refs['login-form'].validate((valid) => {
        // 如果表单验证失败，停止提交
        if (!valid) {
          return
        }

        /* 验证通过，提交登陆 */
        this.login()
      })
      /* 处理后端相应结果 */
      /* 成功 */
      /* 失败 */
    },
    login () {
      /* 开启登陆中 loading */
      this.loginLoading = true

      /*
        对于代码中的请求操作：
          1.接口请求可能需要重用
          2.实际工作中，接口非常容易变动，改起来麻烦
          建议的做法：把所有的请求都封装成函数然后统一的组织到模块中进行管理
          这样做的好处：管理维护更方便，也好重用
      */
      login(this.user).then(res => {
        console.log(res)
        // 登陆成功
        this.$message({
          message: '登陆成功', // 成功提示消息
          type: 'success'
        })
        // 关闭loading
        this.loginLoading = false
      }).catch(err => {
        console.log('登陆失败', err)
        // 登陆失败，catch用来捕获异常
        this.$message.error('手机号或验证码错误') // 错误提示消息
        // 关闭 loading
        this.loginLoading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
  /* background-size 背景填充模式 常见的两个值cover和contain */
  /* cover是让背景的短边显示出来，contain是让背景的长边显示出来 */
  .login-head {
    height: 70px;
    min-width: 400px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-form {
    background-color: #ffffff;
    padding: 30px 50px;
    min-width: 300px;
    .login-btn {
      /* 按钮撑满父元素，使用width:100% */
      width: 100%;
    }
  }
}
</style>

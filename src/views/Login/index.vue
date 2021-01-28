<!--
 * @Author: zhangjiawei
 * @Date: 2021-01-26 17:28:45
-->
<template>
  <div class="main-container flexCenter">
    <div class="login-box">
      <img
        class="logo"
        src="https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*FsnmRIiTfe0AAAAAAAAAAABkARQnAQ" 
        alt="语雀logo">
      <div class="first-title">
        语雀
      </div>
      <div class="first-tips">
        专业的云端知识库
      </div>
       <a-form 
        class="form-box"
        layout="horizontal" 
        :form="form" 
        @submit="handleSubmit">
         <a-form-item
         >
            <a-input 
              v-decorator="[
                'phone',
                {rules: [{required: true, message: '请输入手机号'}]}
              ]"
              placeholder="用户名"
            >
              <a-select
                slot="addonBefore"
                v-decorator="[
                'prefix', 
                { initialValue: '+86' }
                ]"
                style="width: 70px"
              >
                <a-select-option
                  v-for="item in areaNum"
                  :key="item.name"
                  :value="item.value">
                  {{item.value}}
                </a-select-option>
              </a-select>
            </a-input>
         </a-form-item>
         <a-form-item
         >
          <a-input
            v-decorator="[
              'password',
              {rules: [{required: true, message: '请输入密码'}]}
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,0.25)" />
          </a-input>
         </a-form-item>
        <div class="no-pwd-login">
          免密码登录
        </div>
        <a-form-item>
          <a-button 
            type="primary" 
            html-type="submit" 
            style="width: 100%; background: #25b864; border-color: #25b864">
            登录
          </a-button>
        </a-form-item>
       </a-form>
       <div class="icon-wrap">
         <div 
          v-for="item in otherLogin"
          :key="item.value"
          class="login-icon" 
          @click="onHandleLoginMethod(item.name)"
        ></div>
       </div>
       <div class="bottom-feature">
        <span 
          v-for="item in bottomLoginMethod"
          :key="item.value"
          @click="onHandleBottom(item.name)" >
          {{item.name}}
         </span>
       </div>
    </div>
  </div>
</template>
<script>
import store from 'store'
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: 'Login',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      hasErrors,
      bottomLoginMethod:[
        {
          value: 'forgetPwd',
          name: '忘记密码'
        },
        {
          value: 'emailLogin',
          name: '邮箱登录'
        },
        {
          value: 'quickRegister',
          name: '快速注册'
        },
        {
          value: 'seeQuestion',
          name: '遇到问题'
        }
      ],
      otherLogin: [
        {
          value: 'aliplayer',
          name: '支付宝登录'
        },
        {
          value: 'dingding',
          name: '钉钉登录'
        },
        {
          value: 'wechat',
          name: '微信登录'
        },
        {
          value: 'company',
          name: '企业微信登陆'
        }
      ],
      areaNum: [
        {
          name: '中国',
          value: '+86'
        },
        {
          name: '中国香港',
          value: '+852'
        },
        {
          name: '印度',
          value: '91'
        }
      ]
    };
  },
  mounted(){
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      // this.form.validateFields();
    });
  },
  methods:{
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    async handleSubmit() {
      try {
        const params ={ 
          username: 'zhangjiawei',
          password: 12334555
        }
        const data = await this.$apis.loginApi.login(params)
        if(data.code === 200 && data.data.token) {
          store.set('token', data.data.token)
          store.set('username', data.data.username)
        }else {
          throw data
        }
      } catch(e) {
        console.log('错误--->', e);
      }
      // e.preventDefault();
      // // 使用了form组件之后会默认绑定上this.form
      // this.form.validateFields((err, values) => {
      //   if(!err) {
      //     console.log('登录--->', values);
      //   }
      // })
    },
    handleChange(value) {
      console.log(value);
    },
    onHandleLoginMethod(type) {
      alert(type)
    },
    onHandleBottom(type) {
      alert(type)
    }
  }
}
</script>
<style lang="less" scoped>
  .main-container {
    width: 100%;
    height: 100%;
    background: #fafafa;
    .login-box {
      width: 400px;
      background: #FFF;
      padding: 40px 8px 16px;
      border: 1px solid #e9e9e9;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 64px;
        height: 64px;
        margin-bottom: 20px;
      }
      .first-title {
        font-size: 32px;
        color: #262626;
      }
      .first-tips {
        font-size: 18px;
        color: #595959;
        margin-top: 8px;
      }
    }
    .icon-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 26px;
    }
    .login-icon {
      background-image: url(https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*wLosTZsNyYcAAAAAAAAAAABjARQnAQ);
      vertical-align: middle;
      margin-right: 5px;
      width: 28px;
      height: 29px;
      background-repeat: no-repeat;
      background-size: 100%;
      cursor: pointer;
      margin-right: 20px;
      &:nth-of-type(2) {
        background-position: 0 -28.7px;
      }
      &:nth-of-type(3) {
        background-position: 0 -58.4px;
      }
      &:nth-of-type(4) {
        background-position: 0 -88.1px;
      }
      &:nth-of-type(0) {
        background-position: 0 0px;
      }
    }
  }
  .bottom-feature {
    margin-top: 28px;
    display: flex;
    align-items: center;
    span {
      margin: 0 5px;
      cursor: pointer;
      &:hover{
        color: blue
      }
      &:not(:last-of-type){
        &::after {
          display: inline-block;
          content: '|';
        }
      }
    }
  }
  .no-pwd-login {
    color: #595959;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .form-box {
    margin-top: 32px;
  }
  /deep/.ant-form-item {
    margin-bottom: 16px;
  }
</style>
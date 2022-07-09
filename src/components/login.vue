<template>
  <div class="login">
    <div class="login_img" @click="isLogin">登录</div>
    <div v-show="islogin">
      <van-cell-group>
        <van-field v-model="username" placeholder="用户名abc" />
        <van-field v-model="password" placeholder="密码123" />
        <van-button square @click="loginFn">登录</van-button>
        <van-button square>注册</van-button>
      </van-cell-group>
    </div>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import FooterWrap from "./FooterWrap.vue";
import { Dialog } from "vant";
import "../assets/vant.css";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      islogin: false,
    };
  },
  components: { FooterWrap },
  methods: {
    isLogin() {
      this.islogin = true;
    },
    loginFn() {
      if (this.username != "" || this.password != "") {
        // let userinfo = {
        //   username: this.username,
        //   password: this.password,
        // };
        if (this.username == "abc" && this.password == "123") {
          this.$router.push("/usercenter");
          localStorage.setItem("activeIndex", 3);
          localStorage.setItem("islogin", true);
          localStorage.setItem("loginstatus", this.username);
        } else {
          Dialog.alert({
            title: "账户密码错误",
            message: "请检查用户名或密码",
          });
          this.username = "";
          this.password = "";
        }
      } else {
        Dialog.alert({
          title: "登陆失败",
          message: "请输入用户名或密码",
        });
      }
    },
  },
  created() {
    let _islogin = JSON.parse(localStorage.getItem("islogin"));
    console.log(_islogin);
    if (_islogin == true) {
      this.$router.push("/usercenter");
    }
  },
};
</script>

<style scoped>
.login_img {
  width: 2rem;
  height: 2rem;
  font-size: 0.5rem;
  margin: 3.5rem 0 0 2.7rem;
  border-radius: 50%;
  line-height: 2rem;
  text-align: center;
  color: white;
  background-color: red;
}
.login /deep/.van-field__control {
  font-size: 0.4rem;
  border-bottom: 1px solid black;
  margin: 0.3rem 0.5rem;
}
.login /deep/.van-button {
  width: 90%;
  height: 0.6rem;
  font-size: 0.4rem;
  background-color: rgb(108, 247, 108);
  margin: 0.2rem auto;
  display: block;
}
</style>
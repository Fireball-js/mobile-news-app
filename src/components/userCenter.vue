<template>
  <div class="usercenter">
    <span class="usertitle">用户中心</span>
    <van-button square @click="logout">退出登录</van-button>
    <FooterWrap />
  </div>
</template>

<script>
import FooterWrap from "./FooterWrap.vue";
export default {
  name: "userCenter",
  components: { FooterWrap },
  methods: {
    logout() {
      localStorage.setItem("islogin", false);
      localStorage.setItem("loginstatus", "未登录");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.usertitle {
  font-size: 1rem;
}
.usercenter /deep/.van-button {
  width: 90%;
  height: 0.6rem;
  font-size: 0.4rem;
  background-color: rgb(108, 247, 108);
  margin: 0.2rem auto;
  display: block;
}
</style>
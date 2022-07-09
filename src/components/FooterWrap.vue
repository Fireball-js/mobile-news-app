<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      class="footer_main"
      @change="changeMenu"
    >
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">西瓜视频</van-tabbar-item>
      <van-tabbar-item icon="friends-o">放映厅</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ loginstatus }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterWrap",
  data() {
    return {
      msg: "FooterWrap",
      active: 0,
      loginstatus: "",
    };
  },
  methods: {
    changeMenu(_i) {
      localStorage.setItem("activeIndex", _i);
      switch (_i) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/melonvideo");
          break;
        case 2:
          this.$router.push("/cinema");
          break;
        case 3:
          this.$router.push("/login");
      }
    },
  },
  created() {
    let _inx = Number(localStorage.getItem("activeIndex"));
    let _loginstatus = localStorage.getItem("loginstatus");
    if (_inx != this.active) {
      this.active = _inx;
    }
    this.loginstatus = _loginstatus;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer_main {
  border-top: 1px solid rgba(43, 43, 43, 0.5);
  width: 100%;
  height: 0.9rem;
}
.footer_main /deep/.van-tabbar-item__text {
  font-size: 0.3rem;
}
.footer_main /deep/.van-icon {
  font-size: 0.4rem;
}
</style>

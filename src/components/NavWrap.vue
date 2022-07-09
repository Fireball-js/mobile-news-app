<template>
  <div>
    <van-tabs class="nav_main">
      <van-tab v-for="(item, index) in navData" :title="item" :key="index">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "NavWrap",
  data() {
    return {
      msg: "NavWrap",
      navData: [
        "国内",
        "国际",
        "社会",
        "娱乐",
        "军事",
        "科技",
        "财经",
        "体育",
        "游戏",
        "科技",
        "财经",
        "体育",
        "游戏",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_main /deep/.van-tab__text {
  font-size: 0.3rem;
}
.nav_main /deep/.van-tab {
  margin: 0 0.1rem;
}

.nav_main {
  padding: 0.1rem 0;
  border-bottom: 1px solid gray;
}
</style>

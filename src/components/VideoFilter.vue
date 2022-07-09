<template>
  <div>
    <van-nav-bar title="电视剧" class="vf_main">
      <template #right>
        <van-icon name="search" size="0.4rem" />
      </template>
    </van-nav-bar>
    <!-- 菜单栏 -->
    <van-tabs
      type="card"
      class="choosewrap"
      v-model="active1"
      @change="filterA"
    >
      <van-tab name="a_1" title="全部分类"></van-tab>
      <van-tab name="a_2" title="电视剧"></van-tab>
      <van-tab name="a_3" title="电影"></van-tab>
      <van-tab name="a_4" title="纪录片"></van-tab>
      <van-tab name="a_5" title="游戏"></van-tab>
      <van-tab name="a_6" title="少儿"></van-tab>
      <van-tab name="a_7" title="纪录片"></van-tab>
      <van-tab name="a_8" title="游戏"></van-tab>
      <van-tab name="a_9" title="少儿"></van-tab>
    </van-tabs>
    <van-tabs
      type="card"
      class="choosewrap"
      v-model="active2"
      @change="filterB"
    >
      <van-tab name="b_1" title="全部分类"></van-tab>
      <van-tab name="b_2" title="内地"></van-tab>
      <van-tab name="b_3" title="港台"></van-tab>
      <van-tab name="b_4" title="欧美"></van-tab>
      <van-tab name="b_5" title="韩国"></van-tab>
      <van-tab name="b_6" title="泰国"></van-tab>
    </van-tabs>
    <van-tabs
      type="card"
      class="choosewrap"
      v-model="active3"
      @change="filterC"
    >
      <van-tab name="c_1" title="全部分类"></van-tab>
      <van-tab name="c_2" title="动作"></van-tab>
      <van-tab name="c_3" title="爱情"></van-tab>
      <van-tab name="c_4" title="家庭"></van-tab>
      <van-tab name="c_5" title="科幻"></van-tab>
      <van-tab name="c_6" title="古装"></van-tab>
    </van-tabs>
    <van-tabs
      type="card"
      class="choosewrap"
      v-model="active4"
      @change="filterD"
    >
      <van-tab name="d_1" title="全部分类"></van-tab>
      <van-tab name="d_2" title="最热"></van-tab>
      <van-tab name="d_3" title="最新"></van-tab>
      <van-tab name="d_4" title="最多评论"></van-tab>
      <van-tab name="d_5" title="最高评分"></van-tab>
    </van-tabs>
    <div class="movie_list">
      <div class="movie_item" v-for="(i, n) in bSiteData" :key="n">
        <label>
          <img :src="i.pic" />
          <a :href="i.short_link" target="_blank">{{ i.title }}</a>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "videofilter",
  data() {
    return {
      active1: "a_1",
      active2: "b_1",
      active3: "c_1",
      active4: "d_1",
      bSiteData: "",
      filterData: {
        a: "a_1",
        b: "b_1",
        c: "c_1",
        d: "d_1",
      },
    };
  },
  //   computed: {
  //     filterData() {
  //       return [this.active1, this.active2, this.active3, this.active4];
  //     },
  //   },
  created() {
    axios.get("/index/ding.json").then((_d) => {
      this.bSiteData = _d.data.movie;
    });
  },
  methods: {
    filterA(i) {
      let obj = {
        _k: "a",
        _v: i,
      };
      this.filterUpdate(obj);
    },
    filterB(i) {
      let obj = {
        _k: "b",
        _v: i,
      };
      this.filterUpdate(obj);
    },
    filterC(i) {
      let obj = {
        _k: "c",
        _v: i,
      };
      this.filterUpdate(obj);
    },
    filterD(i) {
      let obj = {
        _k: "d",
        _v: i,
      };
      this.filterUpdate(obj);
    },
    filterUpdate(obj) {
      //用于提交数据至后端
      this.filterData[obj._k] = obj._v;
      console.log(this.filterData);
    },
  },
};
</script>

<style scoped>
.vf_main /deep/.van-nav-bar__title,
.vf_main /deep/.van-nav-bar__left,
.vf_main /deep/.van-nav-bar__right .van-icon-search {
  font-size: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
.vf_main {
  height: 0.6rem;
  margin-top: 00.2rem;
  border-bottom: 1px solid gray;
}
.choosewrap {
  height: 1rem;
  margin: 00.1rem;
}
.choosewrap /deep/.van-tabs__nav--card {
  height: 1rem;
  border: none;
}
.choosewrap /deep/.van-tab__text {
  line-height: 0.6rem;
  height: 0.6rem;
  font-size: 0.3rem;
}
.choosewrap /deep/.van-tab {
  color: black;
  height: 0.6rem;
  border: none;
}
.choosewrap /deep/.van-tab--active {
  background-color: white;
  color: red;
  border: 2px solid red;
  border-radius: 0.1rem;
  font-weight: 700;
}
.choosewrap /deep/.van-tabs__wrap {
  height: 1rem;
}
.movie_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.movie_list a {
  font-size: 0.2rem;
}
.movie_item {
  width: 29%;
  margin: 0rem 0.1rem;
}
</style>
<template>
  <div class="melon_v">
    <div class="mainhead">
      <HeaderWrap></HeaderWrap>
      <NavWrap></NavWrap>
    </div>
    <!-- 视频筛选列表 -->
    <div class="video_wrap">
      <ul>
        <li>爱情</li>
        <li>喜剧</li>
        <li>动作</li>
        <li>古装</li>
        <li @click="isfilter">筛选<van-icon name="filter-o" /></li>
      </ul>
    </div>
    <!-- 筛选弹出栏 -->
    <div>
      <van-popup
        v-model="isshow"
        class="video_filter"
        closeable
        close-icon="arrow-left"
      >
        <VideoFilter />
      </van-popup>
    </div>
    <!-- 视频列表 -->
    <div class="video_list" v-for="(i, n) in bSiteData" :key="n">
      <label>
        <a :href="i.short_link" target="_blank">{{ i.title }}</a>
        <!-- <img :src="i.pic" alt="" /> -->
      </label>
    </div>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import FooterWrap from "./FooterWrap.vue";
import HeaderWrap from "./HeaderWrap.vue";
import NavWrap from "./NavWrap.vue";
import VideoFilter from "./VideoFilter.vue";
import axios from "axios";

export default {
  name: "MelonVideo",
  data() {
    return {
      bSiteData: "",
      isshow: false,
    };
  },
  components: { FooterWrap, HeaderWrap, NavWrap, VideoFilter },
  created() {
    axios.get("/index/ding.json").then((_d) => {
      this.bSiteData = _d.data.dance;
    });
  },
  methods: {
    isfilter() {
      this.isshow = true;
    },
  },
};
</script>

<style scoped>
.melon_v {
  position: relative;
  padding: 1.4rem 0 0.9rem 0;
}
.mainhead {
  position: fixed;
  width: 100%;
  background-color: white;
  left: 0;
  top: 0;
  border-bottom: solid rgba(0, 0, 0, 0) 1px;
}
.video_list {
  margin: 0.15rem 0.4rem;
  font-size: 0.2rem;
}
.video_wrap {
  margin: 0.2rem auto;
}
.video_wrap li {
  width: 0.9rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin: 0 0.1rem;
  background-color: rgb(236, 236, 236);
  border-radius: 0.05rem;
  font-size: 0.25rem;
  text-align: center;
  display: inline-block;
}
.video_filter {
  width: 100%;
  height: 100%;
}
.video_filter /deep/.van-popup__close-icon--top-right {
  top: 0.3rem;
  right: 7rem;
  color: blue;
  font-size: 0.3rem;
}
</style>

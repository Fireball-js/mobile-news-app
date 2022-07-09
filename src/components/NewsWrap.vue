<template>
  <div class="news_main">
    <!--#region 置顶新闻 -->
    <div v-for="(i, n) in newsData.topNews" :key="n" class="news_part">
      <label>
        <a :href="i.url">{{ i.title }}</a>
        <span>{{ i.class }}</span>
        <p>{{ i.source }}</p>
        <p>评论数：{{ i.comment }}</p>
      </label>
    </div>
    <!-- 普通新闻 -->
    <div v-for="(i, n) in newsData.normalNews" :key="n + 10" class="news_part">
      <label>
        <a :href="i.url">{{ i.title }}</a>
        <span>{{ i.class }}</span>
        <p>{{ i.source }}</p>
        <p>评论数：{{ i.comment }}</p>
      </label>
    </div>
    <!-- 图片新闻 -->
    <div v-for="(i, n) in newsData.imgNews" :key="n + 100" class="news_part">
      <label>
        <a :href="i.url">{{ i.title }}</a>
        <span>{{ i.class }}</span>
      </label>
    </div>
    <!-- 广告新闻 -->
    <div v-for="(i, n) in newsData.adNews" :key="n + 1000" class="news_part">
      <label>
        <a :href="i.url">{{ i.title }}</a>
        <span>{{ i.class }}</span>
      </label>
    </div>
    <!-- #endregion -->

    <div>
      <div v-for="(i, n) in bSiteaData.bangumi" :key="n" class="news_part">
        <label>
          <a target="_blank" :href="i.short_link">{{ i.title }}</a>
          <span>{{ i.desc }}</span>
          <p>{{ i.tname }}</p>
          <p>B站AV号：{{ i.bvid }}</p>
          <!-- <img :src="i.pic" alt="" /> -->
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api";

export default {
  name: "HeaderWrap",
  data() {
    return {
      msg: "header",
      newsData: {
        // 置顶新闻
        topNews: [
          {
            title: "这个是置顶新闻",
            class: "置顶",
            source: "新华网",
            comment: 132,
            url: "http://baidu.com",
          },
        ],
        // 普通新闻
        normalNews: [
          {
            title: "这个是普通新闻",
            class: "普通",
            source: "新华网",
            comment: 555,
            url: "http://baidu.com",
          },
        ],
        // 图片新闻
        imgNews: [
          {
            title: "这个是图片新闻",
            class: "图片",
            source: "新华网",
            comment: 555,
            url: "http://baidu.com",
          },
        ],
        // 广告
        adNews: [
          {
            title: "这个是广告",
            class: "广告",
            source: "新华网",
            comment: 555,
            url: "http://baidu.com",
          },
        ],
      },
      bSiteaData: "",
    };
  },
  created() {
    axios.get("/index/ding.json").then((_d) => {
      this.bSiteaData = _d.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news_main {
  margin-top: 1.4rem;
  margin-bottom: 0.9rem;
  box-sizing: border-box;
}
.news_part {
  width: 100%;
  padding: 0.1rem 0.3rem;
  box-sizing: border-box;
}
.news_part a {
  font-size: 0.4rem;
  font-weight: 500;
  display: block;
  margin-bottom: 0.1rem;
}
.news_part span,
.news_part p {
  display: inline-block;
  margin-right: 0.2rem;
  color: gray;
  font-size: 0.2rem;
}
.news_part span {
  color: red;
}
</style>

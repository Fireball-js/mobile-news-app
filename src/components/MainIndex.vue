<template>
  <div id="app">
    <div class="mainhead">
      <HeaderWrap></HeaderWrap>
      <NavWrap></NavWrap>
    </div>
    <NewsWrap></NewsWrap>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import FooterWrap from "./FooterWrap.vue";
import HeaderWrap from "./HeaderWrap.vue";
import NavWrap from "./NavWrap.vue";
import NewsWrap from "./NewsWrap.vue";

export default {
  name: "App",
  components: { FooterWrap, HeaderWrap, NavWrap, NewsWrap },
};
</script>

<style scoped>
.app {
  position: relative;
}
.mainhead {
  position: fixed;
  width: 100%;
  background-color: white;
  left: 0;
  top: 0;
  border-bottom: solid rgba(0, 0, 0, 0) 1px;
}
</style>

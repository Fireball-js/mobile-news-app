<template>
  <div class="cinema">
    <div class="mainhead">
      <HeaderWrap></HeaderWrap>
      <NavWrap></NavWrap>
    </div>
    <h1>这里是放映厅</h1>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import FooterWrap from "./FooterWrap.vue";
import HeaderWrap from "./HeaderWrap.vue";
import NavWrap from "./NavWrap.vue";

export default {
  name: "Cinema",
  components: { FooterWrap, HeaderWrap, NavWrap },
};
</script>

<style scoped>
.cinema {
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
</style>

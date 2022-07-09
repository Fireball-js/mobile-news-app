<template>
  <div class="header_main">
    <van-row>
      <van-col span="20"
        ><van-search
          v-model="searchVal"
          shape="round"
          background="red"
          placeholder="请输入搜索关键词"
      /></van-col>
      <van-col span="4" class="header_publish">
        <span><van-icon name="add" /></span><br />
        <span>发布</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "HeaderWrap",
  data() {
    return {
      msg: "HeaderWrap",
      searchVal: "",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAclBMVEUAAADl5eXn5+fl5eXq6uro6Ojm5ubj4+Pk5OTt7e3p6enj4+Pn5+ff39/i4uL/////Nzzr6+v/zc7/UFT/5uf/aWz/tLb/m53/goX/REj/XGD/8vP/qKr/jpH/2tr/dXn/wML/goTx8fH19fX/m57/tLW8xwRAAAAAD3RSTlMAXyCf78+/QKDv34B/EFBAdW3pAAADr0lEQVRo3u2a7XaiMBCGg59tt3Ykk5DwTdW9/1vcatARBjFVck737D7/2oPvE5JJnELFFZtovlzET/K6nEczMcR6Fe9hEvbxfM3iZ6sdTMhu3ruLaLGHaXmLrvPfdzA5u3eWH8wQUf60ho92fd8gEAu30i8Qiv3qVP87CMZuTTcQhpUQsxgCEm9EtIeA7COaoTDMxRKCshSvEJSFiCEo8dSCXCkpk6QwxtpaZ4hPCVQ/bcshgXdaeTvNX6BUJZs2TWscTPMXtGnmnJZuJ0RQWhhE7+f/gskEaKmwgggUQKJ7Tsx0/flZmgL9BenpQ3ywxu2W0pgiSaRUSsEVelzAgyybIGBMK1CPCiqZFOZTZzguMPCogK7JK4m3BAjPCIijoBgSSDjCz7CsageH/oLkMiLCQkuC3YnL2/xs+5wAKxhQaAUOhdsHBcSBLmpqFy+hRaajOznNdF2a49YZEBCoSKESXV7i89L/qEhpPd2kspvgSPzuWSTbyeJgAgwa/jMCUkjWs8ii1qNrAHlvL7u5HppAXVTg4JrGZONVRNvFlTYLL2UOo1jfMnV10rmGh1fqYQG62uDLQqjD16RntlEPCbTbTExA6bRFsDZS3RNUqiso4YgZFshDdvmqzC7LU5tG5l0B28vW7WU8H6Y1F6iibstRO1k/hQk4tzayrApLnx8UpOgpSOHWNugL1LGZSJJGVkqxNbiNZaM7VoxrTaiZYHgLUDrBOS0HSFiZ+gvSU9tkKI3znMBCl58lyCvZsD+vHhV0mwkqBIafoJOGKS/Tbwjyy9istdV5yGOkV4LsuAdyyPGGYLg7VOmNCnY7Sl3fQQNDNyPG8t1wCrc/O61FcjkPSYBtZdceAnNdbSXdTG+9ii0J6MI8vSv4DY5D54AuaOqVUyIJ2IUjgrSh/BNZv2k2dH8kuJokPSrAivK7gVW3fa94mfLZ5AJULN9NCX21tXeITMAniQsynu9SKNPSBUyA7XMZvCWw+XAXWABVo+pMQ3banAf6MhttHUtw5Nb9zOrm6/e1OziyrR9iqPxz/mlkT3keENTtMaRZlC9/08OQf0eQTipARK2PXZO59GCxeDqNOjqOr8B10Pc6On8B4v0ezF/A0n7403cuWEBQXoO/Ygn+kij8a65N2Bd1MyFWEJB54Jel8Vp8sQq3CnP3wjrYVnibiRMfoV65R6LlVxDD7pcQZAiTT0RvMC37xYfoMHuJJx3+aib6rF+m++eZ1VoMMYtelq/xkyyW82gjiD8U9zbr32NaBwAAAABJRU5ErkJggg==",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_main {
  width: 100%;
}
.header_main /deep/.van-row {
  background-color: red;
}
.header_main /deep/.van-search__content {
  height: 0.6rem;
}
.header_main /deep/.van-field__control,
.header_main /deep/.van-icon {
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.header_publish {
  text-align: center;
  font-size: 0.2rem;
  color: white;
}
.header_publish /deep/.van-icon {
  margin-bottom: -0.2rem;
  color: white;
  font-weight: 100;
}
</style>

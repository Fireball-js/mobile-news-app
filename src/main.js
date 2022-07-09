import './assets/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Col, Row, Search, Icon, Tab, Tabs, Tabbar, TabbarItem, Popup, NavBar, Field, CellGroup } from 'vant';

Vue.use(Button).use(Col).use(Row).use(Search).use(Icon).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Popup).use(NavBar).use(Field).use(CellGroup)

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import news from './modules/news'
import chat from './modules/chat'
import shop from './modules/shop'
import settings from './modules/settings'

export default new Vuex.Store({
  modules: {
    news,
    chat,
    shop,
    settings
  }
});
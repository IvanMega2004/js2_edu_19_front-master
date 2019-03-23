import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [
      {
        title: "Хранилище",
        text: "Ура, сложная задача",
        img: ""

      }
    ]
  },
  mutations: {
    setNews(state, news) {
      state.news = news
    }
  },
  actions: {
    addNews({ state, commit }, item) {
let newItem = state.news.concat();
newItem.push(item);
commit("setNews", newItem);
    }
  }
});

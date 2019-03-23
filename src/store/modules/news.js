export default {
state: {
    news: [
      {
        title: "Хранилище",
        text: "Ура, сложная задача",
        img: ""

      }
    ]
  },
  
  actions: {
    addNews({ state, commit }, item) {
let newItem = state.news.concat();
newItem.push(item);
commit("setNews", newItem);
    }
  },

  mutations: {
    setNews(state, news) {
      state.news = news
    }
  }
}

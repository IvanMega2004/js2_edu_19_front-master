import Vue from "vue";
import Router from "vue-router";

import News from "./views/News.vue";
import Chat from "./views/Chat.vue";
import Shop from "./views/Shop.vue";
import Settings from "./views/Settings.vue";

Vue.use(Router);

export default new Router({
  routes: [
{
  path: "/",
  component: News

},

{
  path: "/chat",
  component: Chat

},

{
  path: "/shop",
  component: Shop

},

{
  path: "/settings",
  component: Settings

},
  ]
});

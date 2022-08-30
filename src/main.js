import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import * as VueRouter from 'vue-router';
import { loadFonts } from './plugins/webfontloader';

import App from './App.vue';

loadFonts();

const routes = [
  {
      path: '/',
      component: App
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp({});

app.use(router);

app.use(vuetify);

app.mount('#app');

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: () => import('./pages/Main.vue'),
      meta: {},
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;

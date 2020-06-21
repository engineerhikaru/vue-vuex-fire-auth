import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import store from "./store";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: "/",
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/signin",
      name: 'Signin',
      component: Signin
    },
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    if (!store.state.user) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import News from '../views/News.vue'
import DetailNews from '../views/DetailNews.vue'
import Login from '../views/Admin/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: News
    },
    {
      path: '/noticias/:tag',
      name:'noticias',
      component: DetailNews,
    },
    {
      path: '/adminapp',
      name: 'admin',
      redirect: "/adminapp/login",
      // component: {
      //   render(c) {
      //     return c("router-view")
      //   },
      // },
      children: [
        {
          path: "login",
          name: "Login",
          component: Login,
          meta: { title: "Log In" },
        }
      ]
    }
  ]
})

export default router

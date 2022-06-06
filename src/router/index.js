import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

import Logout from "../components/logout.vue";
import Login from "../components/login.vue";
import Register from "../components/register.vue";
import ForgotPassword from '../components/forgotPassword.vue';
import AdminPanel from '../components/admin.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgo-password',
    name: 'forgotPassword',
    component: ForgotPassword
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPanel
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
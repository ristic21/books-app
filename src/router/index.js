import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import EditBook from "../pages/EditBookPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import RequireAuth from "@/utils/auth";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    beforeEnter: RequireAuth,
  },
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/edit-book/:id",
    props: true,
    name: "EditBook",
    component: EditBook,
    beforeEnter: RequireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;

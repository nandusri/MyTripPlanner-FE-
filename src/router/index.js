import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
import UserProf from "../views/UserProfileView.vue";
import Trips from "../views/Trips.vue";
import Dashboard from "../views/Dashboard.vue";
import AddTrip from "../views/AddTrip.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration
  },
  {
    path: "/user-profile",
    name: "UserProf",
    component: UserProf
  },
  {
    path: "/trips",
    name: "Trips",
    component: Trips
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/add-trip",
    name: "AddTrip",
    component: AddTrip
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

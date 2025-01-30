import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      component: TeamsList,
      alias: "/",
      children: [
        {
          name: "team-member",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    }, // our-domain.com/teams => TeamsList
    { path: "/users", component: UsersList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active-link", //Class name change. Used for styling.
});

const app = createApp(App);

app.use(router);

app.mount("#app");

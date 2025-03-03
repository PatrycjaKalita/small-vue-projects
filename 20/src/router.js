import { createRouter, createWebHistory } from "vue-router";

import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceieved from "./pages/requests/RequestsReceieved.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      children: [{ path: "contact", component: ContactCoach }], //coaches/1/contact
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestsReceieved },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

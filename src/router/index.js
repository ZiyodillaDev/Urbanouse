import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import FamilyHousePage from "@/pages/PropertiesPages/FamilyHousePage.vue";
import LuxuryApartment from "@/pages/PropertiesPages/LuxuryApartment.vue";
import ModernVillaPage from "@/pages/PropertiesPages/ModernVillaPage.vue";
import SinglePage from "@/pages/PropertiesPages/SinglePage.vue";
import AgentsPage from "@/pages/AgentsPage.vue";
import LoginPage from "@/pages/Auth/LoginPage.vue";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/family-house",
      name: "family-house",
      component: FamilyHousePage,
    },
    {
      path: "/luxury-apartment",
      name: "luxury-apartment",
      component: LuxuryApartment,
    },
    {
      path: "/modern-villa",
      name: "modern-villa",
      component: ModernVillaPage,
    },
    {
      path: "/properties/:id",
      name: "property",
      component: SinglePage,
    },
    {
      path: "/agents",
      name: "agents",
      component: AgentsPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export default router;

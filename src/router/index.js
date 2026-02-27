import { createRouter, createWebHistory } from 'vue-router';
import AddRecipe from '../views/AddRecipe.vue';
import EditRecipe from '../views/EditRecipe.vue';
import Recipes from '@/views/Recipes.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: Recipes },
  { path: '/nou', component: AddRecipe },
  { path: '/editar/:id', component: EditRecipe, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
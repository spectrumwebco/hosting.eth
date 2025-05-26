import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

export default function () {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}

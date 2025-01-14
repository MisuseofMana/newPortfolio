
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

import Home from '../pages/Home.vue'
import FateAndForage from '../pages/FateAndForage.vue'
import RaconteurGame from '../pages/RaconteurGame.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/fate-and-forage', component: FateAndForage },
  { path: '/raconteur-game', component: RaconteurGame },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

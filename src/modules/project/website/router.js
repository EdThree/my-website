export default {
  path: 'website',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('./pages/home')
    }
  ]
}

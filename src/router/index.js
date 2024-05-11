import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailView from '../views/EventDetailView.vue'
import AboutView from '../views/AboutView.vue'
import AllEventsView from '../views/AllEventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,  
      component: EventDetailView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/events',
      name: 'all-events',
      component: AllEventsView,
      props: (route)=> ({page: route.query.page})
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '@/views/event/DetailsView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
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
      component: EventDetailsView
    },
    {
      path: '/event/:id/register',
      name: 'event-register',
      props: true,  
      component: EventRegisterView
    },
    {
      path: '/event/:id/edit',
      name: 'event-edit',
      props: true,  
      component: EventEditView
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
      props: route => ({ page: parseInt(route.query.page) || 1})
    }
  ]
})

export default router

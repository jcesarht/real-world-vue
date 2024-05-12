import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
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
      name: 'event-layout',
      props: true,  
      component: LayoutView,
      children:[
        {
          path: '',
          name: 'event-details',
          component: EventDetailsView
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView
        },
      ]
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

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
    /** in this case, redict to component event-info to event with params 
     * first we create a new url and redirect to events before
     * too is possible make inverte
    */
    {
      path:'/event-info/:id',
      redirect: to => {
        return { 
          name: 'event-details',
          params: {id: to.params.id}
        }
      },
      children: [
        { path: 'register', redirect: to =>({ name: 'event-register'})},
        { path: 'edit', redirect: to =>({ name: 'event-edit'})}
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      /* if you wnat add alias you can kae with alias */
      alias: '/about-me'
    },
    /** we need redirect /about-us to /about url */
    {
      path: '/about-us',
      redirect: { name: 'about' }
      // So, you can access "about" URL with /about, /about-us and about-me
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

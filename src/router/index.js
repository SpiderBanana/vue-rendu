import { createRouter, createWebHistory } from 'vue-router'
import KeyPadView from '../views/KeyPadView.vue'
import CallLogView from '../views/CallLogView.vue'
import ContactListView from '../views/ContactListView.vue'
import AddContactView from '../views/AddContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'keypad',
      component: KeyPadView
    },
    {
      path: '/calls',
      name: 'calls',
      component: CallLogView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactListView
    },
    {
      path: '/add-contact',
      name: 'add-contact',
      component: AddContactView
    },

  ]
})

export default router

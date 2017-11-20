import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Google from './Google.vue'
import GoogleNewCampaign from './google/NewCampaign.vue'

import Facebook from './Facebook.vue'


import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/', component: App,
      children: [{
        path: 'google',
        component: Google,
        children: [{
          path: 'new_campaign',
          component: GoogleNewCampaign
        }]
      },{
        path: 'facebook',
        component: Facebook
      }]
    }
  ]
})

new Vue({
  el: '#app',
  router
})

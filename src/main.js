/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { L } from 'vue2-leaflet';
import 'leaflet.icon.glyph';
import Simple from './components/Simple.vue'
import router from './router'
import * as deepstream from 'deepstream.io-client-js'

Vue.use(VueMaterial)
Vue.use(Simple)

delete L.Icon.Default.prototype._getIconUrl
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

new Vue({
  data: {
    ds: null
  },
  created: function() {
    this.ds = deepstream('localhost:6020')
    this.ds.login({}, () => {
      console.log('logged in')
    })
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')

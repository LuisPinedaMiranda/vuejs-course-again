import { createApp } from 'vue'
//Ya no se creará la aplicación a partir del componente ProductList.vue
//import ProductList from './examples/ProductList.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//Import App
import App from './App.vue'

//Vue Router
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')

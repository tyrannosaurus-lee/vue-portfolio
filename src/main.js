import { createApp } from 'vue'
import App from './App.vue'
import store from './store/'
// import VueLoader from 'vue-loader'

// createApp(App).mount('#app')

new VueLoader({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
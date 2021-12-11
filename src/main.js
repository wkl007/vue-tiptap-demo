import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupAntd } from '@/config/antd'

const app = createApp(App)

setupRouter(app)
setupStore(app)
setupAntd(app)

app.mount('#app')

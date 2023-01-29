import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common.css'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CommonHead from '@/components/CommonHead'
const app = createApp(App)
app.component('CommonHead', CommonHead);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(element).mount('#app')

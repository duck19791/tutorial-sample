import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

//router에 쓰일 component 
import Home from './views/Home.vue'
import About from './views/About.vue'
import Users from './views/Users.vue'
import UserDetail from './views/UserDetail.vue'

//routes 정해줌. 경로지정a
const routes = [
    { path: '/', component: Home, name:'home' },    
    { path: '/about', component: About , name:'about'},   
    { path: '/user', component: Users , name:'users'},  
    { path: '/user/:id', component: UserDetail, name:'user', props:true}, 
]

const router = createRouter({
    history : createWebHistory('/tutorial-sample/'),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

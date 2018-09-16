import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Tag from '@/components/Tag'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/detail/:id', component: Detail },
    { path: '/tag/:slug', component: Tag },
    { path: '/class/:slug', component: Tag }
  ]
})

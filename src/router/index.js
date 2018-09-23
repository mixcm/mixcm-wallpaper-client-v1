import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Tag from '@/components/Tag'
import Search from '@/components/Search'



Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', component: Home, meta: { title: '觅漫者 - 迷茫的寻觅者'} },
    { path: '/detail/:id', component: Detail },
    { path: '/tag/:slug', component: Tag },
    { path: '/class/:slug', component: Tag },
    { path: '/search/:keyword', component: Search }
  ]
})

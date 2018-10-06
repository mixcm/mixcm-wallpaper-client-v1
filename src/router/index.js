import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meta from '@/components/Meta'
import Detail from '@/components/Detail'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, meta: {title: '觅漫者 - 迷茫的寻觅者'} },
    { path: '/detail/:aid', component: Detail, meta: {title: '觅漫者 - 迷茫的寻觅者'}  },
    { path: '/class/:slug', component: Meta, meta: {title: 'P:slug - 分类 - 迷茫的寻觅者'}  },
    { path: '/search', component: Search, meta: {title: 'Q:keyword - 搜索 - 觅漫者'}  }
  ]
})

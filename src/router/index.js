import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  },
  routes: [
    { path: '/', component: Home, meta: {title: '觅漫者 - 迷茫的寻觅者'} },
    { path: '/detail/:id', component: Detail, meta: {title: '觅漫者 - 迷茫的寻觅者'}  },
    { path: '/class/:slug', component: Home, meta: {title: 'P:slug - 分类 - 迷茫的寻觅者'}  },
    { path: '/search', component: Search, meta: {title: 'Q:keyword - 搜索 - 觅漫者'}  }
  ]
})

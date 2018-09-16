<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
  }
  import router from './router'
  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })

</script>

<style>
  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .mixcm-container {
      max-width: 1200px;
      position: relative;
      margin: 0 auto;
  }
</style>

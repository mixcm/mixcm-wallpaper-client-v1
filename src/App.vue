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
  #mixcm-header .mixcm-wrapper {
    height: 500px;
  }

  #mixcm-header .mixcm-wrapper .background {
    background-attachment: fixed;
    background-image: url('https://i.loli.net/2018/08/25/5b810426c3e1b.jpg');
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
  }

</style>

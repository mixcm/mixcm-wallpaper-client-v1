<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

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
    max-width: 2000px;
    position: relative;
    margin: 0 auto;
  }

  @media screen and (max-width:2400px) {
    .mixcm-container {
      max-width: 2000px;
    }
  }

  @media screen and (max-width:2000px) {
    .mixcm-container {
      max-width: 1600px;
    }
  }

  @media screen and (max-width:1600px) {
    .mixcm-container {
      max-width: 1200px;
    }
  }

  @media screen and (max-width:1200px) {
    .mixcm-container {
      max-width: 800px;
    }
  }

  @media screen and (max-width:800px) {
    .mixcm-container {
      max-width: 400px;
    }
  }

  #mixcm-content {
    animation: wish-appear .4s;
  }

  @keyframes wish-appear {
    0% {
      opacity: 0;
      transform: translateY(80px)
    }

    to {
      opacity: 1;
      transform: translateY(0)
    }
  }

</style>

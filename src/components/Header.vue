<template>
  <div id="mixcm-header">
    <div class="mixcm-topbar"></div>
    <div class="mixcm-wrapper">
      <div class="background"></div>
    </div>
    <div class="mixcm-tab">
      <router-link tag="a" :to="'/'">首页</router-link>
      <router-link tag="a" :to="'/class/view'">分类</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }

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

  #mixcm-header .mixcm-tab {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    margin-bottom: 10px;
  }

  #mixcm-header .mixcm-tab .router-link-exact-active {
    color: #ff7475;
    background-color: #ffefef;
  }

  #mixcm-header .mixcm-tab a {
    display: inline-block;
    min-width: 90px;
  }

</style>

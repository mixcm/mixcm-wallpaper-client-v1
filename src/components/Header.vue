<template>
  <div id="mixcm-header">
    <div class="mixcm-topbar"></div>
    <div class="mixcm-wrapper" v-if="$route.matched[0].path !== '/detail/:id'">
      <div class="mixcm-container">
        <div class="mixcm-major">
          <h1>觅漫者</h1>
          <p>迷茫的人也终将会寻找到那个美丽的地方。</p>
        </div>
        <form class="mixcm-search" action="/search/">
          <input type="search" name="wd" placeholder="请在这里输入关键词搜索╮(￣▽￣)╭" autocomplete="off">
          <button type="submit"><i class="mdui-icon material-icons">search</i></button>
        </form>
        <div class="mixcm-tags">
          <router-link tag="a" :to="'/tag/233'">233</router-link>
          <router-link tag="a" :to="'/tag/233'">233</router-link>
          <router-link tag="a" :to="'/tag/233'">233</router-link>
        </div>
      </div>
      <div class="background"></div>
    </div>
    <div class="mixcm-tab" v-if="$route.matched[0].path !== '/detail/:id'">
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
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
    position: relative;
  }

  #mixcm-header .mixcm-wrapper .background {
    background-attachment: fixed;
    background-image: url('https://i.loli.net/2018/08/25/5b810426c3e1b.jpg');
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  #mixcm-header .mixcm-wrapper .mixcm-major {
    color: #fff;
  }

  #mixcm-header .mixcm-wrapper .mixcm-major h1 {
    font-size: 2.5rem
  }

  #mixcm-header .mixcm-wrapper .mixcm-major p {
    font-size: 1.2rem
  }

  #mixcm-header .mixcm-wrapper .mixcm-major>* {
    margin-top: 0;
    margin-bottom: 15px;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search {
    width: 680px;
    margin-bottom: 15px;
    position: relative;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search input {
    background-color: #fff;
    opacity: .98;
    padding: 13px 17px;
    width: 100%;
    border-radius: 3px;
    outline: none;
    border: none;
    font-size: 1rem;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search button {
    position: absolute;
    right: 0;
    top: 0;
  }

  #mixcm-header .mixcm-wrapper .mixcm-tags a {
    background-color: #fff;
    opacity: .98;
    padding: 2px 7px;
    border-radius: 3px;
  }

  #mixcm-header .mixcm-tab {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
  }

  #mixcm-header .mixcm-tab .router-link-exact-active {
    color: #ff7475;
    text-shadow: 0 0 1px;
  }

  #mixcm-header .mixcm-tab a {
    display: inline-block;
    min-width: 90px;
  }

</style>

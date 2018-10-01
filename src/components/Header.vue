<template>
  <div id="mixcm-header">
    <div class="mixcm-topbar"></div>
    <div class="mixcm-wrapper" v-if="$route.matched[0].path !== '/detail/:id'">
      <div class="mixcm-container">
        <div class="mixcm-major">
          <p>迷茫的人也终将会寻找到那个美丽的地方。</p>
        </div>
        <form class="mixcm-search" @submit.prevent="submit">
          <router-link tag="a" :to="'/'" class="mixcm-logo"></router-link>
          <el-input placeholder="在这里输入关键词搜索╮(￣▽￣)╭" v-model="keyword" size="large" clearable>
          </el-input>
          <button type="submit"><i class="nexmoefont icon-search"></i></button>
        </form>
        <div class="mixcm-tags">
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
          <router-link tag="a" :to="'/search/233'">233</router-link>
        </div>
      </div>
      <div class="background" v-bind:style="{backgroundImage:'url(' + this.background + ')'}"></div>
    </div>
    <div class="mixcm-tab" v-if="$route.matched[0].path !== '/detail/:id' && $route.matched[0].path !== '/search/:slug' && $route.matched[0].path !== '/search/:keyword'">
      <router-link tag="a" :to="'/'">最新</router-link>
      <router-link tag="a" :to="'/class/scene'">场景</router-link>
      <router-link tag="a" :to="'/class/role'">角色</router-link>
      <router-link tag="a" :to="'/class/camera'">摄像</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
        background: 'https://i.loli.net/2018/08/25/5b810426c3e1b.jpg'
      }
    },
    methods: {
      submit: function () {
        this.$router.push({
          path: '/search/' + this.keyword
        })
      }
    },
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

  #mixcm-header .mixcm-wrapper .mixcm-container {
    padding: 0 10px;
  }

  #mixcm-header .mixcm-wrapper .background {
    background-attachment: fixed;
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  #mixcm-header .mixcm-wrapper .background:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .4) 40%, rgba(0, 0, 0, .4) 70%, rgba(0, 0, 0, .5));
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
    text-align: center;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search {
    max-width: 680px;
    margin-bottom: 15px;
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
    padding: 11px 63px;
    width: 100%;
    border-radius: 50px;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search .mixcm-logo {
    transition: .3s all;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 7px;
    left: 8px;
    border-radius: 100%;
    z-index: 1;
    overflow: hidden;
    background-image: url('https://i.loli.net/2018/09/22/5ba60d67f0c9c.png');
    background-size: 100%;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search .el-input {
    margin: 0 -13px;
    padding: 0 16px;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search input {
    border: none;
    padding-left: 0;
    font-size: 1rem;
  }

  #mixcm-header .mixcm-wrapper .mixcm-search button {
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    margin: 7px;
    margin-right: 8px;
    outline: none;
    border: none;
    border-radius: 0;
    background: transparent;
    color: rgb(117, 117, 117);
  }

  #mixcm-header .mixcm-wrapper .mixcm-tags {
    text-align: center;
    max-width: 680px;
    font-size: 0;
  }

  #mixcm-header .mixcm-wrapper .mixcm-tags a {
    background-color: #fff;
    padding: 3px 8px;
    border-radius: 50px;
    margin: 3px;
    display: inline-block;
    font-size: 15px;
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
    transition: .3s all;
    display: inline-block;
    min-width: 90px;
  }

</style>

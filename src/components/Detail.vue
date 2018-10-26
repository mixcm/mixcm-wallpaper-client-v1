<template>
  <div id="mixcm-content">
    <div class="mixcm-wallpaper">
      <div class="mixcm-pic">
        <div class="mixcm-cover" v-on:click="$router.back(-1)">
          <img :src="item.urls.regular">
          <div class="mixcm-major">
          </div>
        </div>
        <div class="mixcm-background"><img :src="item.urls.small"></div>
      </div>
      <div class="mixcm-background" v-bind:style="{backgroundImage:'url(' + item.urls.small + ')'}"></div>
    </div>
    <div class="mixcm-tab">
      <el-badge :value="12" class="mixcm-badge">
        <a class="praise"><i class="nexmoefont icon-heart"></i><p>喜欢</p></a>
      </el-badge>
      <el-badge :value="12" class="mixcm-badge">
        <a class="collect"><i class="nexmoefont icon-eye"></i><p>浏览</p></a>
      </el-badge>
      <el-badge :value="12" class="mixcm-badge">
        <a :href="item.urls.raw" download="233" class="download"><i class="nexmoefont icon-download"></i><p>下载</p></a>
      </el-badge>
    </div>
    <div class="mixcm-container mixcm-comment">
      <h1 class="icon icon-bubbles"> 219 评论</h1>
      <br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: String
      }
    },
    methods: {
    },
    created: function () {
      this.axios.get(this.GLOBAL.API + '/wallpaper/' + this.$route.params.aid)
          .then((res) => {
            this.item = res.data;
          })
          .catch(function (error) {
            console.log(error)
          });
    },
  }

</script>

<style scoped>
  #mixcm-content .mixcm-wallpaper {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  #mixcm-content .mixcm-wallpaper .mixcm-pic {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
  }

  #mixcm-content .mixcm-wallpaper img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }

  #mixcm-content .mixcm-wallpaper .mixcm-pic .mixcm-cover {
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
  }

  #mixcm-content .mixcm-wallpaper .mixcm-pic > .mixcm-background {
    position: absolute;
    top: 0;
    width: 100%;
    filter: blur(50px);
    height: 100%;
  }

  #mixcm-content .mixcm-wallpaper > .mixcm-background {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: calc(100% + 40px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(100px);
  }

  #mixcm-content .mixcm-tab {
    text-align: center;
    position: relative;
    padding: 14px;
  }

  #mixcm-content .mixcm-tab a {
    transition: all .35s;
    color: #7a7b7c;
    background-color: #fff;
    margin: -8px;
    display: inline-block;
    height: 65px;
    width: 65px;
    line-height: 65px;
    border-radius: 100px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  #mixcm-content .mixcm-tab a:hover {
    width: 150px;
  }

  #mixcm-content .mixcm-tab a i {
    transition: all .35s;
    height: 49px;
    width: 49px;
    margin: 8px;
    line-height: 49px;
    border-radius: 100%;
    font-size: 23px;
  }

  #mixcm-content .mixcm-tab a:hover i {
    margin-right: 20px;
    color: #fff;
  }

  #mixcm-content .mixcm-tab a.praise:hover i {
    background-color: #ff6e6e;
  }

  #mixcm-content .mixcm-tab a.collect:hover i {
    background-color: #fed466;
  }

  #mixcm-content .mixcm-tab a.download:hover i {
    background-color: #0084ff;
  }

  #mixcm-content .mixcm-tab a p {
    margin: 0;
    padding-right: 27px;
  }

  #mixcm-content .mixcm-tab a > * {
    float: left;
  }

  #mixcm-content .mixcm-comment {
    max-width: 900px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px -16px 20px 0 rgba(0,0,0,.03);
    position: relative;
  }

  h1 {
    text-align: center;
    color: #7a7b7c;
    padding: 35px;
    display: block;
    font-weight: normal;
    margin: 0;
  }

  .mixcm-badge {
        margin: 16px;
  }

</style>

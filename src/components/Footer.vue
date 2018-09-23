<template>
  <div id="mixcm-footer">
    <el-button class="mixcm-backtop" @click="backTop()" v-show="backTopShow" icon="nexmoefont icon-caret-top" circle></el-button>
    <div class="">233</div>
    <div class="mixcm-copyright">Copyright &copy;
      {{ year }} Mixcm. All rights reserved.</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
        backTopShow: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 5));
          }
        })();
      },
      handleScroll() {
        if (document.documentElement.scrollTop + document.body.scrollTop > 550) {
          this.backTopShow = true;
        } else {
          this.backTopShow = false;
        }
      }
    }
  }

</script>




<style>
  #mixcm-footer {
    margin-top: 10px;
    background-color: #f2f5fa;
  }

  #mixcm-footer .mixcm-backtop {
    position: fixed;
    right: calc(25% - 315px);
    bottom: 30px;
    z-index: 999;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  }

  #mixcm-footer .mixcm-copyright {
    opacity: .9;
    background-image: url(https://i.loli.net/2018/08/25/5b810426c3e1b.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: 50%;
    padding: 8em 0;
    text-align: center;
    color: #fff;
    overflow: hidden;
    position: relative;
  }

</style>

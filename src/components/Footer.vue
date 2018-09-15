<template>
  <div id="mixcm-footer">
    <div class="">233</div>
    <div class="mixcm-copyright">Copyright &copy;
      {{ year }} Mixcm. All rights reserved.</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    },
  }
</script>

<style>
#mixcm-footer {
  background-color: #fff;
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

#mixcm-footer .mixcm-copyright:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg,#a480ff,#ff8f83);
    opacity: .5;
    z-index: -1;
}
</style>

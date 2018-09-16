<template>
  <div id="mixcm-content">
    <div class="mixcm-container">
      <el-carousel trigger="click" height="500px" style="margin: 10px;border-radius: 3px;">
        <el-carousel-item v-for="item in items" :key="item.id">
          <img :src="item.urls.small" style="    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;">
        </el-carousel-item>
      </el-carousel>
      <waterfall :align="'center'" :line-gap="400" :line="10" :watch="items">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.id">
          <div class="mixcm-item">
            <router-link tag="a" :to="'/detail/'+item.id"><img v-lazy="item.urls.small"></router-link>
            <div class="class"> {{ item.color }}</div>
          </div>
        </waterfall-slot>
      </waterfall>
    </div>
  </div>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  export default {
    data() {
      return {
        items: ''
      }
    },
    components: {
      Waterfall,
      WaterfallSlot
    },
    created: function () {
      this.axios.get(
          'https://api.unsplash.com/photos/?client_id=0d095f7c17a870835c4b9aae20fa4ffcafb7ba4cb0c627668dfe56561a6fa83c&orientation=landscape'
        )
        .then((res) => {
          this.items = res.data;
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }

</script>

<style>
  #mixcm-content .vue-waterfall-slot {}

  #mixcm-content .mixcm-item {
    background-color: #f3f3f3;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    margin: 10px;
    border-radius: 3px;
    overflow: hidden;
  }

  #mixcm-content .mixcm-item img {
        width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
  }

  #mixcm-content .mixcm-item .class {
    font-size: 16px;
    line-height: 18px;
    padding: 12px 10px 12px 8px;
    color: #614611;
    background: #fdce71;
    display: block;
    position: absolute;
    right: 0;
    top: 20px;
    z-index: 5;
    border-radius: 0 3px 3px 0;
  }

  #mixcm-content .mixcm-item .class:before {
    content: "";
    height: 0;
    position: absolute;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 21px;
    border-right-color: #fdce71;
    position: absolute;
    top: 0;
    right: 100%;
  }

  #mixcm-content .mixcm-item .class:after {
    content: "";
    position: absolute;
    top: 18px;
    left: -3px;
    height: 6px;
    width: 6px;
    border: 1px solid;
    border-radius: 100%;
    color: #614611;
  }

</style>

<template>
  <div id="mixcm-content">
    <waterfall :align="'center'" :line-gap="400" :line="10" :watch="items">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.id">
        <div class="mixcm-item">
          <img v-lazy="item.urls.regular">
        </div>
      </waterfall-slot>
    </waterfall>
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
#mixcm-content .mixcm-item {
  background-color: #fff;
  width: calc(100% - 20px);
  margin: 10px;
}
#mixcm-content .mixcm-item img {
  width:100%;
  display: block;
}
</style>

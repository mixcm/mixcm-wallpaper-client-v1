<template>
  <div id="mixcm-content">
    <div class="mixcm-container">
      <el-carousel trigger="click" height="240px" type="card" style="margin: 10px 10px 0 10px;">
        <el-carousel-item v-for="item in items" :key="item.id">
          <div class="mixcm-item">
            <router-link tag="a" :to="'/detail/'+item.id"><img v-lazy="item.urls.small"></router-link>
            <div class="class"> {{ item.color }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <Item :api="api" :page="page"></Item>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'

  export default {
    data() {
      return {
        items: String,
        page: 1,
        api: 'https://api.unsplash.com/photos/?client_id=0d095f7c17a870835c4b9aae20fa4ffcafb7ba4cb0c627668dfe56561a6fa83c',
      }
    },
    components: {
      Item
    },
    created: function () {
      this.axios.get(
          'https://api.unsplash.com/photos/?client_id=0d095f7c17a870835c4b9aae20fa4ffcafb7ba4cb0c627668dfe56561a6fa83c&per_page=30&page='+this.page
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
  #mixcm-content .el-carousel .mixcm-item {
    margin: 0 !important;
    width: 100%;
    height: 100%;
  }

</style>

<template>
  <div id="mixcm-content">
    <div class="mixcm-container">
      <!--<el-carousel trigger="click" height="240px" type="card" style="margin: 10px 10px 0 10px;">
        <el-carousel-item v-for="item in items" :key="item.id">
          <div class="mixcm-item">
            <router-link tag="a" :to="'/detail/'+item.id"><img v-lazy="item.urls.small"></router-link>
            <div class="class"> {{ item.color }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>-->
      <Item></Item>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'

  export default {
    data() {
      return {
        items: String,
      }
    },
    components: {
      Item
    },
  }

</script>

<style>
  #mixcm-content .el-carousel .mixcm-item {
    margin: 0 !important;
    width: 100%;
    height: 100%;
  }

</style>

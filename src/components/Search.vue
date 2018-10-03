<template>
  <div id="mixcm-content">
    <div class="mixcm-container">
      {{ keyword }}
      <Item></Item>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'

  export default {
    data() {
      return {
        keyword: this.$route.query.keyword,
      }
    },
    components: {
      Item
    },
    watch: {
      $route(to, from) {
        this.keyword = this.$route.query.keyword;
      }
    }
  }

</script>

<style>

</style>

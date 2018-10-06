<template>
  <div id="mixcm-content">
    <div class="mixcm-container">
      <Item :items="items"></Item>
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

</style>

<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="1000"
    infinite-scroll-throttle-delay="0">
    <waterfall :line-gap="400" :min-line-gap="200" :max-line-gap="400" :watch="items" ref="waterfall">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot v-for="(item, index) in items" :key="item.id" :width="item.width" :height="item.height" :order="index">
        <div class="mixcm-item">
          <router-link tag="a" :to="'/detail/'+item.aid"><img v-lazy="item.urls.small"></router-link>
          <div class="class"> {{ item.meta.class.name }}</div>
        </div>
      </waterfall-slot>
    </waterfall>
    <div v-show="loading" v-loading="loading" style="height: 120px;"></div>
  </div>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  import infiniteScroll from 'vue-infinite-scroll'

  export default {
    data() {
      return {
        busy: false,
        loading: false,
        page: this.$route.query.page,
        slug: this.$route.query.slug,
        keyword: this.$route.query.keyword,
        items: String,
      }
    },
    directives: {
      infiniteScroll
    },
    methods: {
      delUrlParam: function (url, ref) {
        if (url.indexOf(ref) == -1) {
          return url;
        }
        var arr_url = url.split('?');
        var base = arr_url[0];
        var arr_param = arr_url[1].split('&');
        var index = -1;
        var i;
        for (i = 0; i < arr_param.length; i++) {
          var paired = arr_param[i].split('=');
          if (paired[0] == ref) {
            index = i;
            break;
          }
        }

        if (index == -1) {
          return url;
        } else {
          arr_param.splice(index, 1);
          return base + "?" + arr_param.join('&');
        }
      },
      loadInit: function () {
        if (this.page == null) {
          this.page = 1;
        }
        this.busy = true;
        this.loading = true;
        this.axios.get(this.GLOBAL.API+'/wallpaper', {
            params: {
              page: this.page,
              slug: this.slug,
              keywrod: this.keyword,
            }
          })
          .then((res) => {
            this.items = res.data;
            this.busy = false;
          })
          .catch(function (error) {
            console.log(error)
          });
        this.loading = false;
      },
      loadMore: function () {
        this.busy = true;
        this.loading = true;
        this.page++;
        this.axios.get(this.GLOBAL.API+'/wallpaper', {
            params: {
              page: this.page,
              slug: this.slug,
              keywrod: this.keyword,
            }
          })
          .then((res) => {
            if (res.data.length > 0) {
              this.busy = false;
              if(this.keyword!=null){
                var url = this.delUrlParam(window.location.href, 'page');
              }else{
                var url = this.delUrlParam(window.location.href+'?home=yes', 'page');
              }
              history.pushState({}, "", url + "&page=" + this.page)
              this.items = this.items.concat(res.data);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        this.loading = false;
      }
    },
    components: {
      Waterfall,
      WaterfallSlot
    },
    created: function () {
      this.loadInit();
    },
    watch: {
      $route(to, from) {
        this.slug = this.$route.params.slug;
        this.page = this.$route.params.page;
        this.busy = false;
        this.loadInit();
      }
    }
  }

</script>

<style>
  #mixcm-content .mixcm-item {
    background-color: #fbfbfb;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    margin: 10px;
    border-radius: 3px;
    overflow: hidden;
    background-position: center;
    background-size: 200px;
    background-repeat: no-repeat;
    background-image: url('../assets/loading.gif');
  }

  .vue-waterfall {
    min-height: 1500px;
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
    top: 25px;
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

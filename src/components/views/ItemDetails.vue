
<template>
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.image" alt="Photo">
    </div>
    <div class="col-sm-6">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <div class="d-flex align-items-center justify-content-between bg-light py-2 px-3 mt-3 border-top">
        <p class="m-0"><strong>Price: {{ item.price }}</strong></p>
        <a href="#" @click="addToCart(item)" class="btn btn-primary">+ Add</a>
      </div>
    </div>
  </div>
  <h1 v-else>Loading ...</h1>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      item: null
    }
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item)
    },
    fetchItem() {
      let self = this
      axios.get('https://fakestoreapi.com/products/' + this.$route.params.id)
        .then(res => {
          self.item = res.data
        })
    }
  }
}
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

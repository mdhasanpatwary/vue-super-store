
<template>
  <div v-if="!loading" class="row">
    <div class="col-lg-4 col-sm-6 col-auto" v-for="item in items" :key="item.id">
      <div class="card mb-4">
        <router-link :to="{ path: '/item/' + item.id}">
          <img :src="item.image" class="card-img-top" alt="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
          </div>
        </router-link>
        <div class="card-footer">
          <p class="card-text"><strong>${{ item.price }}</strong></p>
          <a href="#" class="btn btn-primary" @click="addToCart(item)">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>
  <h1 v-else>Loading ...</h1>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    this.fetchInventory();
  },
  computed: {
    items() {
      return this.$store.getters.getInventory
    },
    loading() {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    fetchInventory() {
      let self = this
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          self.$store.dispatch('addToInventory', res.data)
          self.$store.dispatch('getLoading', false)
        })
    }
  }
}
</script>

<style>
  .card-img-top {
    max-height: 200px;
    object-fit: cover;
  }
  img {
    max-width: 100%;
  }
</style>

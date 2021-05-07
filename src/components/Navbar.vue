
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
      <router-link class="navbar-brand" :to="{path: '/'}">Super Store</router-link>

      <router-link class="navbar-brand" :to="{path: '/'}">Home</router-link>
      <router-link class="navbar-brand" :to="{path: '/item/1'}">Product Details</router-link>

			<form @submit.prevent="search" class="d-flex">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
            v-model="keyword"
					/>
					<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		</div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      let self = this
      axios.get('https://fakestoreapi.com/products/search/' + this.keyword)
        .then(res => {
          self.$store.commit('addToInventory', res.data)
        })
    }
  }
}
</script>

<style>

</style>

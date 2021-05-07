
<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
      <span class="item-name"><strong>Rm</strong></span>
      <span class="item-name"><strong>Name</strong></span>
      <span class="item-price"><strong>Price</strong></span>
    </li>
    <br />

    <li v-for="(item, index) in items" :key="index" class="list-group-item d-flex justify-content-between">
      <span @click="removeItem(index)" class="btn btn-sm btn-danger">-</span>
      <span class="item-name">{{ item.title }}</span>
      <span class="item-price">${{ item.price }}</span>
    </li>
    <br />

    <li class="list-group-item d-flex justify-content-between">
      <span class="item-name"><strong>Total</strong></span>
      <span class="item-price"><strong>${{ totalPrice }}</strong></span>
    </li>

    <li v-if="items.length > 0" class="list-group-item d-flex justify-content-between">
      <button @click="checkout" class="btn btn-block btn-success w-100">Checkout</button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart
    },
    totalPrice() {
      let total = 0;
      this.items.map(item => {
        total += parseFloat(item.price);
      })
      return total.toFixed(2);
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch('removeItem', index);
    },
    checkout() {
      if(confirm('Are You Sure You Want To Checkout?')) {
        this.$store.dispatch('clearCart')
      }
    }
  }
}
</script>

<style>

</style>

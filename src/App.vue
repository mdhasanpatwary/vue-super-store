<template>
  <div id="app">

<navbar />

<div class="container pt-3">
		<div class="row">
			<div class="col-md-9">
        <router-view />
			</div>
			<div class="col-md-3">
				<cart />
			</div>
		</div>
	</div>

  </div>
</template>

<script>
import Cart from './components/Cart.vue';
import Navbar from './components/Navbar.vue';


export default {
  components: { Navbar, Cart }
};

</script>

<style>
</style>

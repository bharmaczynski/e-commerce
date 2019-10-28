<template>
  <div class="dashboard">
    <Cart />
    <Products />  
  </div>
</template>

<script>
import Cart from '@/components/cart/Component';
import Products from '@/components/products/Component';

export default {
  components:{
    Cart,
    Products,
  },
}
</script>

<style>
.dashboard {
  max-width: 1020px;
  margin: auto;
}
</style>
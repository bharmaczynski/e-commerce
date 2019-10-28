<template>
  <div class="cart">
    <div class="cart-header">
      <div class="cart-title">Cart</div>
      <button
        @click="setCartVisibility()"
        class="cart-button btn"
      >
        <span v-if="!cart.show">{{ cart.btnShow }}</span>
        <span v-else>{{ cart.btnHide }}</span>
      </button>
    </div>
    <div 
      v-if="cart.show"
      class="cart-inner"
    >
      <CartList />
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js';

import CartList from '@/components/cart/CartList';

export default {
  components: {
    CartList,
  },
  data() {
    return {
      cart: {
        show: false,
        btnShow: 'Show Cart',
        btnHide: 'Hide Cart'
      }
    }
  },
  mounted() {
    EventBus.$on('show-cart', () => {
      this.cart.show = true;
    })
  },
  beforeDestroy(){
    EventBus.$off('show-cart');
  },
  methods: {
    setCartVisibility() {
      this.cart.show = !this.cart.show;
    }
  },
}
</script>

<style lang="scss">
.cart {
  margin-bottom: 30px;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-title {
  font-size: 24px;
  font-weight: 500;
}
.cart-inner {
  margin-top: 30px;
  padding: 10px 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  background: #fff;
}
</style>

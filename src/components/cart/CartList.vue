<template>
  <div>
    <div
      v-if="productsInCart.length"
      class="cart-list"
    >
      <CartItem
        v-for="item in productsInCart" 
        :key="item.id"
        :item="item"
      />
      <div class="cart-list__total">
        <span>Total:</span> {{ cartTotal }} zł
      </div>
    </div>
    <div
      v-else
      class="cart-info"
    >
      Your cart is empty
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CartItem from '@/components/cart/CartItem';

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters([
      'productsInCart',
      'cartTotal',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.cart-info {
  text-align: center;
}
.cart-list__total {
  margin: 20px 0;
  padding-right: 10px;
  text-align: right;
  font-size: 20px;
  font-weight: 500;
  span {
    margin-right: 10px;
    font-size: 22px;
    font-weight: 500;
  }
}
</style>

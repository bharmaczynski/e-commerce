<template>
  <div class="product-item">
    <div class="product-item__img">
      <img 
        :src="product.image"
        :alt="product.name"
      />
    </div>
    <div class="product-item__content">
      <div class="product-item__title">{{ product.name }}</div>
      <div class="product-item__price">{{ product.price }} zł</div>
      <button
        @click="addItem(product)"
        class="product-item__btn btn"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { EventBus } from '@/event-bus.js';

export default {
  props: {
    product: {
      type: Object,
      default: null,
    }
  },
  methods: {
    ...mapActions([
      'addToCart'
    ]),
    addItem(item) {
      EventBus.$emit('show-cart');
      EventBus.$emit('show-notification');
      this.addToCart(item);
    }
  },
}
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-direction: column;
  width: calc(25% - 10px);
  margin-bottom: 20px;
  padding: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  background: #fff;
}
.product-item__img {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.product-item__content {
  padding: 20px 0;
}
.product-item__title {
  overflow: hidden;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.product-item__price {
  text-align: center;
}
.product-item__btn {
  margin: 15px auto 0;
}

@media (max-width: 960px) {
  .product-item {
    width: calc(50% - 10px);
  }
}

@media (max-width: 600px) {
  .product-item {
    width: 100%;
  }
}

</style>

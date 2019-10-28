<template>
  <div class="product-list">
    <Productitem
      v-for="product in sortedItems" 
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Productitem from '@/components/products/ProductItem';

export default {
  components: {
    Productitem,
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters([
      'sortedItems',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProducts',
    ]),
  }
}
</script>

<style lang="scss">
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

<template>
  <div class="products">
    <ProductsHeader />
    <ProductsList />
  </div>
</template>

<script>
import ProductsHeader from '@/components/products/ProductsHeader';
import ProductsList from '@/components/products/ProductsList';

export default {
  components: {
    ProductsHeader,
    ProductsList
  },
}
</script>

<style lang="scss">
.products {
  display: flex;
  flex-direction: column;
}
</style>

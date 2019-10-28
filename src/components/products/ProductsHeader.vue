<template>
  <div class="products-header">
    <div class="products-header__title">Products</div>
    <div class="products-header__sort">
      <select @change="getOrderParameters($event)">
        <option value="">Sort</option>
        <option 
          value="price"
          :data-ascending="true"
        >
          Lowest Price
        </option>
        <option 
          value="price"
          :data-ascending="false"
        >
          Highest Price
        </option>
        <option
          value="name"
          :data-ascending="true"
        >
          Alphabetical: A-Z
        </option>
        <option
          value="name"
          :data-ascending="false"
        >
          Alphabetical: Z-A
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setSort',
    ]),
    getOrderParameters(event) {
      const parameter = event.target.value;
      const ascending = event.target.options[event.target.options.selectedIndex].dataset.ascending;
      this.setSort({parameter, ascending})
    }
  }
}
</script>

<style lang="scss">
.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.products-header__title {
  font-size: 24px;
  font-weight: 500;
}
.products-header__sort {
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 100%;
    background: #fff;
    border-radius: 3px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 14px;
    right: 14px;
    width: 8px;
    height: 8px;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    transform: rotate(45deg);
  }
}
</style>

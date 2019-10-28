<template>
  <div
    class="cart-item"
  >
    <div class="cart-item__left">
      <div class="cart-item__img">
        <img 
          :src="item.image" 
          :alt="item.name"
        />
      </div>
      <div class="cart-item__title">{{ item.name }}</div>
    </div>
    <div class="cart-item__right">
      <div class="cart-item__quantity">
        <span class="title">Quantity</span>
        <input 
          @keypress="isNumber($event)"
          v-model="item.quantity"
          :placeholder="item.quantity"
        />
        <div class="cart-item__quantity-buttons">
          <button
            @click="item.quantity++"
            class="btn"
          >
            <i class="fas fa-plus"></i>
          </button>
          <button 
            @click="decrementItem(item)"
            class="btn"
          >
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="cart-item__price-remove">
        <div 
          @click="removeFromCart(item)"
          class="cart-item__remove" 
        >
          <i class="far fa-trash-alt"></i>
        </div>
        <div class="cart-item__price">{{ item.price * item.quantity }} zł</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions([
      'removeFromCart',
    ]),
    decrementItem(item) {
      if (item.quantity > 0) {
        item.quantity--;
      } else {
        item.quantity = 0;
      }
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }
  }
}
</script>

<style lang="scss">
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #dadada;
  &:last-child {
    border-bottom: 0;
  }
}
.cart-item__left, .cart-item__right {
  display: flex;
}
.cart-item__left {
  align-items: center;
}
.cart-item__img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
  width: 100px;
  height: 70px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.cart-item__title {
  max-width: 200px;
  margin-right: 20px;
  font-size: 18px;
}
.cart-item__quantity {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .title {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }
  input {
    width: 20px;
    height: 28px;
    margin-right: 5px;
    border: 1px solid #ddd;
    text-align: center;
  }
}
.cart-item__quantity-buttons {
  display: flex;
  flex-direction: column;
  .btn {
    min-width: auto;
    padding: 4px;
    margin: 1px;
    font-size: 6px;
  }
}
.cart-item__price-remove {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 10px;
}
.cart-item__price {
  width: 80px;
  align-self: flex-end;
  text-align: right;
  font-size: 18px;
}
.cart-item__remove {
  align-self: flex-end;
  margin-bottom: 12px;
  color: #db3b2d;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #000;
  }
}

@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
  }
  .cart-item__left {
    flex-direction: column-reverse;
    justify-content: center;
  }
  .cart-item__img {
    margin-right: 0;
  }
  .cart-item__title {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .cart-item__right {
    justify-content: space-between;
  }
  .cart-item__quantity {
    padding-left: 10px;
    .title {
      text-align: left;
    }
    justify-content: flex-start;
  }
}
</style>

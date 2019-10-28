<template>
  <div class="dashboard">
    <CartComponent />
    <ProductsComponent />
    <transition name="fade">
    <NotificationComponent v-if="showNotification" />
    </transition>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js';

import CartComponent from '@/components/cart/Component';
import ProductsComponent from '@/components/products/Component';
import NotificationComponent from '@/components/Notification';

export default {
  data() {
    return {
      showNotification: false,
    }
  },
  components:{
    CartComponent,
    ProductsComponent,
    NotificationComponent,
  },
  mounted() {
    EventBus.$on('show-notification', () => {
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);
    })
  },
  beforeDestroy(){
    EventBus.$off('show-notification');
  },
}
</script>

<style lang="scss">
.dashboard {
  max-width: 1020px;
  margin: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
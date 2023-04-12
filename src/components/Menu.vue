<template>

    <div class="menu" v-if="menuVisible || isVisible">
      <div class="menu__container">

        <div 
          class="menu__item" 
          v-for="(menu__item, index) in $store.getters.getMenu" 
          :key="index"
        >

          <a>{{ menu__item }}</a>

        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  
  import { mapState } from 'vuex';
  export default {
    name: 'Menu',
    props: {
      
    },
    computed: {
    ...mapState(["menuVisible"]),

    isVisible() {
      return window.innerWidth > 375;
    },
  },

}

  </script>
  
 
  <style lang="scss">
    
  </style>
  
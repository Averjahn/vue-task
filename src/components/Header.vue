<template>
  <div class="header">
    <div class="header__container">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="location__notification">
                <div class="location">
                    <div class="location__icon">
                        <img src="@/assets/img/location.png" alt="">
                    </div>
                    <div class="location__text">
                        <p>Москва и область</p>
                    </div>
                </div>
                <div 
                    class="notification"
                    v-if="!closeVisible"
                >
                    <img src="@/assets/img/notification-bell.png" alt="">
                </div>
            </div>
            
            <div 
                class="burger-menu" 
                @click="changeClose(), showMenu()"
                v-if="!closeVisible"
            >
                <img src="@/assets/img/hamburger.png" alt="">
            </div>
            <div 
                class="close" 
                @click="changeClose(), showMenu()"
                v-if="closeVisible"    
            >
                <img src="@/assets/img/close.png" alt="">
            </div>
        </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';
export default {
  name: 'Header',
  props: {
    
  },
  methods: {
    ...mapMutations(["showMenu", "changeClose"])
    
  },
  computed: {
    ...mapState(["menuVisible", "closeVisible"]),
  }
}
</script>


<style scoped lang="scss">

</style>

<template>
  <div id="app">
    <Common />
    <Top />
    <!-- <List /> -->
    <List2 />
    <!-- <Popup /> -->
    <Bottom />
  </div>
</template>

<script>
import Common from '@/components/Common.vue'
import Top from '@/components/Top.vue'
import List2 from '@/components/List2.vue'
import Bottom from '@/components/Bottom.vue'
//import {computed,ref } from 'vue';
//import {useStore} from 'vuex';

export default {
  name: 'App',
  components: {
    Common,
    Top,
    List2,
    Bottom
  }
}
</script>

<style>
  #app {overflow:hidden;}
</style>

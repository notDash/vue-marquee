<template>
  <div id="app">
    <myMarquee :list="list" class="my" :icon="true"/>
  </div>
</template>

<script>
import myMarquee from './lib/vue-marquee'
export default {
  name: 'app',
  components: {
    myMarquee
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        'xxx 抢了一个手机',
        '1xxx 抢了一个手机',
        '2xxx 抢了一个手机',
        '3xxx 抢了一个手机',
        '4xxx 抢了一个手机',
      ]
    }
  }
}
</script>

<style lang="scss">
.my {
  color: red;
  background: #000;
}
</style>

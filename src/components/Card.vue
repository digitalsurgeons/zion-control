<template>
<router-link :to="route">
  <div class="card">
    <div class="inside">
      {{text}}
    </div>
  </div>
</router-link>
</template>

<script>
const get = require('simple-get')

export default {
  name: 'Card',
  props: {
    text: String,
    route: String
  },
  // methods: {
  //   sendRequest(event) {

  //   }
  // },
  // computed: {
  //   upRoute() {
  //     return this.$route.path
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 23vw;
  height: 13vw;
  position: relative;
  background: black;
  clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0% 20%);
}

.inside {
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0% 20%);
  background: white;
}
</style>

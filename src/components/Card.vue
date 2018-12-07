<template>
  <div>
    <router-link v-if="$route.name != 'environment'" :to="link">
      <div class="card">
        <div class="inside">
          <h3>{{text}}</h3>
        </div>
      </div>
    </router-link>
    <template v-else>
      <div class="card" @click="sendRequest(endpoint)">
        <div class="inside">
          <h3>{{text}}</h3>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
const get = require('simple-get')

export default {
  name: 'Card',
  props: {
    text: String,
    link: String,
    endpoint: String
  },
  methods: {
    sendRequest(endpoint) {
      get.concat('http://localhost:3000'+endpoint, function (err, res, data) {
        alert(data.toString())
      })
    }
  }
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

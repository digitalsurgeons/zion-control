<template>
  <div>
    <router-link v-if="$route.name != 'environment'" :to="link">
      <div class="card">
        <div class="inside">
          <h1>{{text}}</h1>
        </div>
      </div>
    </router-link>
    <template v-else>
      <div class="card" @click="sendRequest(endpoint)">
        <div class="inside">
          <h1>{{text}}</h1>
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
        if (res.statusCode == 200) {
          this.$notify({
            group: 'server',
            title: 'Success',
            text: data.toString(),
            type: 'success'
          })
        } else if (res.statusCode == 404) {
          this.$notify({
            group: 'server',
            title: 'Not Found',
            text: data.toString(),
            type: 'warn'
          })
        } else if (res.statusCode == 500) {
          this.$notify({
            group: 'server',
            title: 'Server Error',
            text: data.toString(),
            type: 'error'
          })
        } else {
          this.$notify({
            group: 'server',
            title: 'Error',
            text: err,
            type: 'error'
          })
        }
      }.bind(this))
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
  margin-left: 5vw;
  margin-right: 5vw;
  cursor: pointer;
}

.inside {
  position: absolute;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0% 20%);
  background: white;
}

a {
  color: black;
}

a:visited {
  color: black;
}
</style>

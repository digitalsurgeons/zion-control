<template>
  <div class="home">
    <h5>zion-control</h5>
    <template >
      <h4>{{ currentRoute }}</h4>
      <router-link v-if="$route.name != 'home'" :to="upRoute"><h2>Go Up</h2></router-link>
    </template>

    <div class="buttons">
      <template v-if="$route.name == 'environment'">
        <template v-for="(value, key) in $options.config[$route.params.property][$route.params.environment]">
          <Card :key="key" :text="key" :endpoint="'/'+$route.params.property+'/'+$route.params.environment+'/'+key" />
        </template>
      </template>
      <template v-else-if="$route.name == 'property'">
        <template v-for="(value, key) in $options.config[$route.params.property]">
          <Card :key="key" :text="key" :link="'/'+$route.params.property+'/'+key" />
        </template>
      </template>
      <template v-else>
        <template v-for="(value, key) in $options.config">
          <Card :key="key" :text="key" :link="'/'+key" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
const config = require('@/../config.js')

export default {
  name: 'home',
  config: config,
  components: {
    Card
  },
  computed: {
    upRoute() {
      let splitArray = this.$route.path.split('/')
      splitArray.pop()
      if (splitArray.length == 1) {
        return "/"
      } else {
        return splitArray.join('/')
      }
    },
    currentRoute() {
      let splitArray = this.$route.path.split('/')
      return splitArray.pop()
    }
  }
}
</script>

<style scoped>
  .buttons {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }
</style>
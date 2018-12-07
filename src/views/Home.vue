<template>
  <div class="home">
    <h2>zion-control</h2>
    <router-link v-if="$route.name != 'home'" :to="upRoute">Go Up</router-link>
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
      return splitArray.join('/')
    }
  }
}
</script>

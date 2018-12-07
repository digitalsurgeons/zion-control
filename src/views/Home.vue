<template>
  <div class="home">
    <h2>zion-control</h2>
    <template v-if="$route.params.environment">
      <template v-for="(value, key) in $options.config[$route.params.property][$route.params.environment]">
        <Card :key="key" :text="key" :endpoint="'/'+$route.params.property+'/'+$route.params.environment+'/'+key" />
      </template>
    </template>
    <template v-else-if="$route.params.property">
      <template v-for="(value, key) in $options.config[$route.params.property]">
        <Card :key="key" :text="key" :route="'/'+$route.params.property+'/'+$route.params.environment" />
      </template>
    </template>
    <template v-else>
      <template v-for="(value, key) in $options.config">
        <Card :key="key" :text="key" :route="'/'+$route.params.property" />
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
  }
}
</script>

<template>
  <ul>
    <li :key="index" v-for="(item, index) in remoteData">
      {{item.name}}
    </li>
    <hr/>
  </ul>
</template>

<script>
import createRemoteFetchMixin from '../hoc/Mixins'

export default {
  mixins: [
    createRemoteFetchMixin(()=>fetch('https://jsonplaceholder.typicode.com/users'))
  ],

  methods: {
  }
}
</script>

<style>

</style>

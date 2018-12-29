<template>
  <ul>
    <li :key="index" v-for="(item, index) in remoteData">
      {{item.name}}
    </li>
    <hr/>
  </ul>
</template>

<script>
export default {
    props: ['remoteData']
}
</script>

<style>

</style>

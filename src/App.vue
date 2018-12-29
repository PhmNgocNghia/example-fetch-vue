<template>
  <div id="app">
    <h1>Normal fetch</h1>
    <NormalFetch/>

    <h1>Fetch using mixins</h1>
    <FetchUsingMixins/>

    <h1>Fetch using HOC component (HOC function)</h1>
    <CreatedFetchHoc/>

    <h1>Fetch using HOC component</h1>
    <FetchHoc :fetchFunction="fetchRemoteData">
      <template slot-scope="{remoteData, isFetching, fetchErr, }">
        <h1 v-if="isFetching">Loading</h1>
        <h1 v-else-if="fetchErr">{{fetchErr}}</h1>
        <ul>
          <li v-for="data in remoteData" :key="data.id">
            {{data.name}}
          </li>
        </ul>
      </template>
    </FetchHoc>
  </div>
</template>

<script>

// Normal fetch component
import NormalFetch from './components/NormalFetch'

// Fetch using mixin
import FetchUsingMixins from './components/FetchUsingMixins'

// Hoc Func Component
import FetchHocFucTemplate from './components/FetchHocFucTemplate'
import CreateFetchHocComp from './hoc/CreateFetchHocComp'

const CreatedFetchHoc = CreateFetchHocComp(()=>fetch('https://jsonplaceholder.typicode.com/users'), 'CreatedFetchHoc', FetchHocFucTemplate)

// Hoc Component
import FetchHoc from './components/FetchHoc'

export default {
  name: 'app',
  components: {
    FetchUsingMixins,
    CreatedFetchHoc,
    FetchHoc,
    NormalFetch
  },
  methods: {
    fetchRemoteData () {
      return fetch('https://jsonplaceholder.typicode.com/users')
    }
  }
}
</script>

<style>

</style>

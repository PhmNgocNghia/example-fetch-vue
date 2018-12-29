<template>
  <div>
    <slot
      :isFetching="isFetching"
      :fetchErr="fetchErr"
      :remoteData="remoteData"
      :fetchRemoteData="fetchRemoteData"
    />
  </div>
</template>

<script>
export default {
  props: ["fetchFunction"],
  data: () => ({
    isFetching: false,
    fetchErr: "",
    remoteData: []
  }),
  mounted() {
    this.fetchRemoteData();
  },

  methods: {
    fetchRemoteData() {
      this.isFetching = true;
      this.fetchFunction()
        .then(async res => {
          this.remoteData = await res.json();
        })
        .catch(err => {
          this.fetchErr = err;
        })
        .finally(() => (this.isFetching = false));
    }
  }
};
</script>

<style>
</style>

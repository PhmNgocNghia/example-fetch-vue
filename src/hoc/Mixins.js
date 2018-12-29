export default fetchFunction => ({
  data() {
    return {
      remoteData: [],
      isFetching: false,
      fetchErr: ""
    };
  },

  mounted() {
    this.fetchRemoteDataMixin();
  },

  methods: {
    fetchRemoteDataMixin() {
      this.isFetching = false;
      fetchFunction()
        .then(async res => {
          this.remoteData = await res.json();
        })
        .catch(err => {
          this.fetchErr = err;
        })
        .finally(() => (this.isFetching = false));
    }
  }
});

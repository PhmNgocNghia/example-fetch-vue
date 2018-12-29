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
     data () {
        return {
            remoteData: [],
            isFetching: false,
            fetchErr: ''
        }
    },

    mounted () {
        this.fetchRemoteData()
    },

    methods: {
        fetchRemoteData () {
            this.isFetching = false
            fetch('https://jsonplaceholder.typicode.com/users').then(async res =>{
                this.remoteData = await res.json()
            }).catch(err=>{
                this.fetchErr = err
            }).finally(()=>this.isFetching = false)
        }
    }
}
</script>

<style>

</style>

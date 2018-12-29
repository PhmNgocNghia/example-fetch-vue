 import Vue from 'vue'

export default (fetchFunction, name, Component) => {    
    return Vue.component(name, {
        data () {
            return {
                remoteData: [],
                isFetching: false,
                fetchErr: ''
            }
        },
    
        mounted () {
            this.fetchRemoteDataMixin()
        },
    
        methods: {
            fetchRemoteDataMixin () {
    
                this.isFetching = true
                fetchFunction().then(async res =>{
                    this.remoteData = await res.json()
                }).catch(err=>{
                    this.fetchErr = err
                }).finally(()=>this.isFetching = false)
            }
        },
        
        render(createElement) {
            if (this.isFetching) {
                return createElement('h1', 'loading')
            }
            if (this.fetchErr) {
                return createElement('h1', this.fetchErr)
            }
            return createElement(Component, {
                props: {
                    remoteData: this.remoteData
                }
            })
        }
    })
}
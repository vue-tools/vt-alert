<style src="./style.css"></style>
<template src="./template.html"></template>

<script>
    import Vue from 'vue'
    import plugin from './plugin'

    let Component = {
        props: {
            visible: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                access: false
            }
        },
        methods: {
            handle(time) {
                setTimeout(() => {
                    this.access = !this.access
                }, time)
            }
        }
    }

    Vue.use(plugin(Component))

    export default Component
</script>
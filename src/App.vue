<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/base";

    #app {
        height: 100%;
        position: relative;
    }

    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
        #app {
            padding-bottom: 10px !important;
        }
    }

    @media screen and (device-width: 414px) and (device-width: 896px) and (-webkit-device-pixel-ratio: 3) {
        #app {
            padding-bottom: 10px !important;
        }
    }
</style>

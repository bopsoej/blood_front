<template>
  <div id="app">
    <!--<router-link to="/home">首页</router-link>-->
    <!--<router-link to="/login">登录页</router-link>-->
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted(){
    // this.$store.getCookie();

  },
  methods:mapActions([
    'getCookie'
  ])
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -5px;
  padding:-5px;
}

.el-submenu__title{
  padding:0;
  /*margin-top:5px;*/
  height:200px;
  line-height:120px;
  width:100px;
  font-size:1.1em;
  /*border:solid 1px red*/
}

</style>

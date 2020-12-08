<template>
  <div id="app">
    <!-- <my-header v-show=" !(path==='/login') && !(path==='/register') && !(path==='*')"></my-header> -->
    <router-view/>
    <!-- <my-footer v-show=" !(path==='/login') && !(path==='/register') && !(path==='/news') && !(path==='/about') && !(path==='/detail') && !(path==='*')"></my-footer> -->
  </div>
</template>
<script>
// import Erro from './views/Erro'
// import Detail from './views/Detail'
// import About from './views/About'
// import News from './views/News'
// import Register from './views/Register'
// import Login from './views/Login'
// export default {
//   name:'App',
//   data(){
//     return{
//       path:''
//     }
//   },
//   components:{
//     Erro,
//     Detail,
//     About,
//     News,
//     Register,
//     Login
//   },
//   mounted(){
//     this.path=this.$route.path;
//   },
//   watch:{
//     $route(to,from){
//       this.path=to.path;
//     }
//   }
// }
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

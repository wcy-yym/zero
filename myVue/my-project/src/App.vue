<template>
  <div id="app">
    <my-header></my-header>
    <myCarousel></myCarousel>
    <myContent></myContent>
    <router-view name='main'></router-view>
  </div>
</template>

<script>
import myHeader from './components/Head'
import myCarousel from './components/Carousel'
import myContent from './components/Content'

export default {
  name: 'app',
  components: {
    myHeader,
    myCarousel,
    myContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
body,div,span,a,p,ul,li {
  margin: 0;
  padding: 0;
}
</style>

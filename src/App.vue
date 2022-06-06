<template>
  
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
.btn {
  background-color: #734429!important;
}
.btn:hover{
  background-color: #9e7964!important;
}
.btn>a{
    text-decoration: none;
    color: white;
}
.section-heading {
    border-left: 3px solid #ff674f;
    padding-left: 10px;
}


</style>
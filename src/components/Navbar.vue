<template>
  <div>
    <b-navbar type="dark" variant="" class="yellow">
      
      <div class="logo"><router-link to="/"><img src="../assets/1642596708_0a75cb16_navbar_logo.png" alt="LUTI"></router-link></div>
      <b-navbar-nav>
        <b-nav-item> <router-link to="/" exact>首頁</router-link></b-nav-item>
        <b-nav-item><router-link to="/" exact>關於</router-link></b-nav-item>
        <b-nav-item><router-link to="/" exact>商品</router-link></b-nav-item>

        <!-- Navbar dropdowns -->

        <b-nav-item-dropdown text="使用者" right class="user">
          <b-dropdown-item><router-link to="/login">登入會員</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/register">註冊會員</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/logout">登出會員</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed:{
    currentQuantiy(){
      return this.$store.getters.currentQuantiy
    }
  }
}
</script>
<style>
p {
  color: #734429;
}

li a {
  text-decoration: none;
  color: #734429;
}
.yellow{
  background-color: #f0e8e4;
}
.user{
  color: #734429;
}
</style>
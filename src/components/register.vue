<template>
  <div class="container my-5 w-25">
    <form @submit.prevent="userRegistration">
      <div class="row">
      <div class="col">
        <h5 class="section-heading">會員註冊</h5>
      </div>
    </div>
    
      <div class="form-group">
        <label>名字</label>
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label>信箱</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <div class="form-group">
        <label>密碼</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        註冊
      </button>

      <p class="forgot-password text-right">
        已經註冊過了?
        <router-link to="/login">登入</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
};
</script>
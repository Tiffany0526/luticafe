<template>
  <div class="container my-5 w-25">
    <form @submit.prevent="userLogin">
      <div class="row">
      <div class="col">
        <h5 class="section-heading">會員登入</h5>
      </div>
    </div>

      <div class="form-group">
        <label><i class="bi bi-person"></i>帳號</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <div class="form-group">
        <label><i class="bi bi-lock"></i>密碼</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block"><router-link to="/admin">
          登入會員
        </router-link></button>
      <!-- btn-block 填滿整個畫面(獨立佔據一行) -->
      <hr class="divider">
      
      <div class="d-flex justify-content-between">
         <router-link to="/register">
          <i class="bi bi-person"></i>註冊會員
        </router-link>
      <router-link to="/forgotPassword">
          <i class="bi bi-unlock"></i>忘記密碼
        </router-link>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
};
</script>
<!-- src/views/LoginPage.vue -->
<template>
    <div>
      <h1>Login</h1>
      <login-form />
    </div>
  </template>
  
  <script>
  import LoginForm from '../components/LoginForm.vue';
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  
<!-- src/components/LoginForm.vue -->
<template>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import axiosInstance from '@/utils/axios';
  
  export default {
    data() {
      return {
        email: 'bschulist@example.net',
        password: 'password',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axiosInstance.post('login', {
            email: this.email,
            password: this.password,
          });
          const token = response?.data?.token
          localStorage.setItem("accessToken" , token)
          this.$router.push("/home")

          // Handle successful login (e.g., store token, redirect, etc.)
          console.log('Login successful', response.data);
        } catch (error) {
          // Handle login failure (e.g., show error message)
          console.error('Login error:', error);
        }
      },
    },
  };
  </script>

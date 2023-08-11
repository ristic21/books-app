<!-- src/views/Home.vue -->
<template>
    <div class="container">
      <button class="btn btn-default" @click="logout">Logout</button>
      <h1>Favorite Books</h1>
      <add-book-form />
      <book-list />
    </div>
  </template>
  
  <script>
  import BookList from '../components/BookList.vue';
  import AddBookForm from '../components/AddBookForm.vue';
  
  export default {
    components: {
      BookList,
      AddBookForm,
    },
    methods: {
      logout() {
        localStorage.clear()
        this.$router.push("/")
      }
    }
  };
  </script>
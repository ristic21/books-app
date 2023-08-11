<template>
    <div>
      <div v-for="book in books" :key="book.id">
        <h2>{{ book.title }}</h2>
        <p>{{ book.description }}</p>
        <img :src="book.image" alt="Book Cover" class="img-fluid"/>
        <button @click="editBook(book)" class="btn btn-secondary">Edit</button>
        <button @click="removeBook(book.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['books']),
    },
    methods: {
      ...mapActions(['fetchBooks', 'deleteBook']),
  
      // eslint-disable-next-line no-unused-vars
       editBook(book) {
        this.$router.push(`/edit-book/${book?.id}`)
      },
  
      async removeBook(bookId) {
        
        if (confirm("Are you sure you want to delete this item?")) {
            console.log("Item will be deleted.");
            await this.deleteBook(bookId)
          } else {
            console.log("Item will not be deleted.");
        }
      },
    },
    created() {
      this.fetchBooks();
    },
  };
  </script>
  
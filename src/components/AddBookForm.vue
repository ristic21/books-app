<template>
    <form @submit.prevent="addBook">
      <input class="form-control" type="text" v-model="title" placeholder="Title" />
      <textarea class="form-control" v-model="description" placeholder="Description"></textarea>
      <input class="form-control" type="text" v-model="image" placeholder="Image URL" />
      <button class="btn btn-primary" type="submit">Add Book</button>
    </form>
  </template>
  
  <script>
    import { mapActions } from 'vuex';

  export default {
    
    data() {
      return {
        title: '',
        description: '',
        image: '',
      };
    },
    methods: {

      ...mapActions(['createBook']),

      async addBook() {
        try {    
          const formData = {
            title: this.title,
            description: this.description,
            image: this.image
          }

          console.log(formData)
          this.createBook(formData)

          this.title = ''
          this.description = ''
          this.image = ''
          
        } catch (error) {
          console.error('Error adding book:', error);
        }
      },
    },
  };
  </script>
  
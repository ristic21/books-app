<template>
    <h3>Edit book</h3>
    <form @submit.prevent="saveBook">
      <input class="form-control" type="text" v-model="title" placeholder="Title" />
      <textarea class="form-control" v-model="description" placeholder="Description"></textarea>
      <input class="form-control" type="text" v-model="image" placeholder="Image URL" />
      <button class="btn btn-primary" type="submit">Save Book</button>
    </form>
</template>


<script>
    import { mapActions, mapState } from 'vuex'


  export default {

    computed: {
      ...mapState(['book']),
    },
    
    data() {
      return {
        title: '',
        description: '',
        image: '',
        bookId: this.$route.params.id
      };
    },

    watch: {
        book() {
            this.setBook()
        }
    },

    methods: {

      ...mapActions(['fetchBook', 'updateBook']),
      

      async saveBook() {
        try {    
          const formData = {
            title: this.title,
            description: this.description,
            image: this.image
          }

          const payload = { 
            formData, 
            bookId: this.bookId
           }

          this.updateBook(payload)
           this.$router.push("/home")
          
        } catch (error) {
          console.error('Error adding book:', error);
        }
      },

      setBook() {
        this.title = this.book?.title
        this.description = this.book?.description
        this.image = this.book?.image
      }

    },
    mounted() {
        this.fetchBook(this.bookId)
    }
  };
  </script>
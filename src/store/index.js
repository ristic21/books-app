import { createStore } from "vuex";
import axiosInstance from "@/utils/axios";

const store = createStore({
  state() {
    return {
      books: [],
      book: {},
    };
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_BOOK(state, book) {
      state.book = book;
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axiosInstance.get("books");
        const books = response.data;
        commit("SET_BOOKS", books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },

    async fetchBook({ commit }, bookId) {
      try {
        const response = await axiosInstance.get(`books/${bookId}`);
        const book = response.data;
        commit("SET_BOOK", book);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },

    async deleteBook({ dispatch }, bookId) {
      try {
        await axiosInstance.delete(`books/${bookId}`);
        dispatch("fetchBooks");
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    },

    async createBook({ dispatch }, payload) {
      try {
        await axiosInstance.post(`books`, payload);
        dispatch("fetchBooks");
      } catch (error) {
        console.error("Error updating book:", error);
      }
    },

    async updateBook({ dispatch }, payload) {
      console.log("payload ", payload);

      try {
        await axiosInstance.patch(
          `books/${payload?.bookId}/edit`,
          payload?.formData
        );
        dispatch("fetchBooks");
      } catch (error) {
        console.error("Error updating book:", error);
      }
    },
  },
  getters: {
    books: (state) => state.books,
    book: (state) => state.book,
  },
});

export default store;

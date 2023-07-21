import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks, addBook, deleteBook } from "./apiFunctions";

const initialState = {
  books: [],
  isLoading: false,
  hasError: false,
  len: 0,
};

function convertor(key, [arr]) {
  return {
    item_id: key,
    author: arr.author,
    title: arr.title,
    category: arr.category,
  };
}

function isLoading(status, state, error = false) {
  state.isLoading = status;
  state.hasError = error;
}

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        isLoading(true, state);
      })

      .addCase(addBook.fulfilled, (state) => {
        isLoading(false, state);
        state.len += 1;
      })

      .addCase(addBook.rejected, (state) => {
        isLoading(false, state, true);
      })

      .addCase(getAllBooks.pending, (state) => {
        isLoading(true, state);
      })

      .addCase(getAllBooks.fulfilled, (state, action) => {
        isLoading(false, state);
        const bookObject = action.payload;
        state.books = Object.keys(bookObject).map((key) =>
          convertor(key, bookObject[key])
        );
      })

      .addCase(deleteBook.pending, (state) => {
        isLoading(true, state);
      })
      .addCase(deleteBook.fulfilled, (state) => {
        isLoading(false, state);
        state.len -= 1;
      })
      .addCase(deleteBook.rejected, (state) => {
        isLoading(false, state, true);
      });
  },
});
console.log("HELLO");

export default bookSlice.reducer;

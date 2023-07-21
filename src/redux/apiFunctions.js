import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/";
const storeID = "WsheRkAhzgaqLlvttkYt";
const defaultURL = `${api}${storeID}/books`;

const getAllBooks = createAsyncThunk("books/getAllBooks", async () => {
  try {
    const res = await axios.get(defaultURL);
    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
});

const addBook = createAsyncThunk("books/addBook", async (book) => {
  try {
    const res = await axios.post(defaultURL, book);
    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
});

const deleteBook = createAsyncThunk("books/deleteBook", async (itemID) => {
  try {
    const res = await axios.delete(`${defaultURL}/${itemID}`);
    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
});

export { getAllBooks, addBook, deleteBook };

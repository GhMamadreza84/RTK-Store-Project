import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return api.get("/products");
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {},
});

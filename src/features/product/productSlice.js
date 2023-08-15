import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../../utils/StatusCode";
const initialState = {
  data: [],
  status: "",
  error: "",
};
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status = StatusCode.LOADING;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE;
        state.data = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

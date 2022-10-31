import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  }
})

// Action creators are generated for each case reducer function
export const {  } = ProductSlice.actions

export default ProductSlice.reducer
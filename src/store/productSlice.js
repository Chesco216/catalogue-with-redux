import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      action.payload.map((product) => {
        state.push(product)
      })
    },
    clearProducts: (state) => initialState
  }
})

export const { addProducts, clearProducts } = productSlice.actions

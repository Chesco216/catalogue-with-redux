import { createSlice } from '@reduxjs/toolkit'

const initialState = 
[
  {
    id: '',
    title: '',
    price: 0,
    category: '',
    description: '',
    imgUrl: ''
  },
]

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => state.push(action.payload)
  }
})

export const { addProducts } = productSlice.actions

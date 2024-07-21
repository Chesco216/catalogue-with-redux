import { createSlice } from  '@reduxjs/toolkit'

const initialState = {
  cat: ''
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => { state.cat = action.payload.toLowerCase() }
  }
})

export const { setCategory } = categorySlice.actions

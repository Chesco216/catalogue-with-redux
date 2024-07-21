import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from "../../components/Header/Header"
import { getProducts } from '../../services/fetchProducts'
import { addProducts } from '../../store/productSlice'

export const Categories = () => {

  const products = useSelector(state => state.products)
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  //FIX: error when i try to load fetch data to produscts state
  useEffect(() => {
    getProducts(category.cat)
      .then(data => {
        dispatch(addProducts(data))
        console.log(data)
      })
      .catch(err => console.log(err))
  },[category])

  return (
    <>
      <Header/>
      <h1>{category.cat}</h1>
    </>
  )
}


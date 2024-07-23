import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from "../../components/Header/Header"
import { getProducts } from '../../services/fetchProducts'
import { addProducts, clearProducts } from '../../store/productSlice'
import cat from './Categories.module.css'
import { ProductCard } from './components/ProductCard/ProductCard'

export const Categories = () => {

  const products = useSelector(state => state.products)
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearProducts())
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
      <div className={cat.products}>
        {
          products.map((item) => {
              return <ProductCard
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                img={item.image}
              />
          })
        }
      </div>
    </>
  )
}


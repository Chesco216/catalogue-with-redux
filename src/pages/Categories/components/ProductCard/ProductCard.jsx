import React from 'react'
import card from './ProductCard.module.css'
import { CartSVG } from '../../../../components/Header/SVGS/SVGS'

export const ProductCard = ({ id, title, price, description, img }) => {

  const handleModal = () => {
    console.log(id)
    console.log(description)
  }

  return (
    <div className={card.container}>
      <img className={card.image} src={img}/>
      <h3 className={card.title}>{title}</h3>
      <label className={card.price}>{price} $</label>
      <button
        className={card.btn}
        onClick={() => handleModal()}
      >
        <CartSVG w={20} h={20}/>
        Add To Card
      </button>
    </div>
  )
}


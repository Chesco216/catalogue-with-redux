import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import header from './Header.module.css'
import { MenuSvg } from './SVGS/SVGS'
import { setCategory } from '../../store/categorySlice'

export const Header = () => {

  const [open, setIsOpen] = useState(false)
  const [s, setS] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleMenu = () => {
    setS(!s)
    //TODO: make tansition for slide-out
    if(open) {
      setTimeout(() => console.log('pipii'), 500)
    }
    setIsOpen(!open)
  }



  const handleCategory = ( e ) => {
    navigate('/products')
    setIsOpen(false)
    console.log(e.target.innerText)
    const cat = e.target.innerText
    dispatch(setCategory(cat))
  }

  return (
    <header className={header.container}>
      <span className={header.logoContainer}>
        <img className={header.shopLogo} src='https://cdn.shopify.com/shop-assets/static_uploads/web/shop_logo/shop-logo-default.png' />
        <label className={header.logoLabel}>Tiendita pipipi</label>
      </span>
      <span 
        className={header.menu}
        onClick={handleMenu}
      >
          <MenuSvg w={30} h={30}/>
      </span>
      {
        (open) && (
          <ul className={header.list}>
            <li 
              className={header.item}
              onClick={(e) => handleCategory(e)}
            >
              Men's clothing
            </li>
            <li 
              className={header.item}
              onClick={(e) => handleCategory(e)}
            >
              Women's clothing
            </li>
            <li 
              className={header.item}
              onClick={(e) => handleCategory(e)}
            >
              Jewelery
            </li>
          </ul>
        )
      }
    </header>
  )
}
 

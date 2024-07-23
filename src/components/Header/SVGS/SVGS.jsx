import React from 'react'

export const MenuSvg = ({ w, h}) => {
  return (
  <svg width={`${w}px`} height={`${h}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill="white"/>
    <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill="white"/>
    <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z" fill="white"/>
  </svg>
  )
}

export const CartSVG = ({ w, h }) => {
  return (
  <svg width={`${w}px`} height={`${h}px`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g id="cart">
    <circle class="cls-1" cx="10.07" cy="20.59" r="1.91" fill='white'/>
    <circle class="cls-1" cx="18.66" cy="20.59" r="1.91" fill='white'/>
    <path class="cls-1" d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10" fill='white'/>
    <polyline class="cls-1" points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91" fill='white'/>
    </g>
  </svg>
  )
}


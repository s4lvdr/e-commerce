import React, { createContext, useState } from 'react'
import Product from '../product';
export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
  let cart = {};
  for (let i = 0; i<Product.length + 1; i++){
    cart[i]= 0
  }
  return cart;
};
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalAmount = () =>{
      let totalAmount = 0;
      for (const item in cartItems){
        if (cartItems[item] > 0){
          let intemInfo = Product.find((product) => product.id === Number(item))
          totalAmount +=cartItems[item] * intemInfo.price
        }
      }
      return totalAmount
    }

    const addToCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]: prev[itemId] - 1 }))
    }
const updateCartItemAmount = (newAmount, itemId) => {
  setCartItems((prev) => ({...prev, [itemId]: newAmount}))
} 

    const contextVAlue = {cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalAmount}
    console.log(cartItems)
  return (
    <ShopContext.Provider value={contextVAlue} >{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
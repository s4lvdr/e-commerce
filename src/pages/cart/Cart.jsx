import style from "./cart.module.css"
import Product from '../../product'
import { useContext } from 'react'
import { ShopContext } from '../../contex/shop-contex'
import CartItem from './CartItem'
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()
  const navigate = useNavigate()
  return (
      <>
      <div className={style.header}>
        <h1>Your Cart Items</h1>
          {totalAmount > 0 ? 
      <div className={style.subTotal}>
        <p>Subtotal: Php{totalAmount} </p>
        <button onClick={()=> navigate("/e-commerce/")} className={style.continueShopping}>Continue Shopping</button>
        <button className={style.checkout}>Checkout</button>
      </div>
      : <h2>Your Cart is empty</h2>
    }
      
      </div>
    <div className={style.cartcontainer}>
    
      <div >
      {Product.map((products) =>{
      if (cartItems[products.id] !== 0){
        return <CartItem data={products}/>
      }
      })}
      </div>
    
    </div>
      </>
  )
}

export default Cart
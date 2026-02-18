import { useContext } from "react";
import style from "./cart.module.css"
import { ShopContext } from "../../contex/shop-contex";

const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemAmount} = useContext(ShopContext)
  return (
   <>
   <div className={style.product}>
           <img src={productImage} alt="" />
           <div className={style.description}>
               <p>
                   <b>{productName}</b>
               </p>
               <p>Php{price}</p>
               <button className={style.counthandleMinus} onClick={()=> removeFromCart(id)}>-</button>
               <input type="text" value={cartItems[id]} className={style.inputhandler} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} />
               <button className={style.counthandleAdd} onClick={()=>addToCart(id)}>+</button>

           </div>
       </div>
   </>
  )
}

export default CartItem
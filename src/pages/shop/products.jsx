import style from "./product.module.css"
import { ShopContext } from "../../contex/shop-contex";
import { useContext } from "react";

const Products = (props) => {
    const { id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className={style.product}>
        <img src={productImage} alt="" />
        <div className={style.description}>
            <p>
                <b>{productName}</b>
            </p>
            <p>Php{price}</p>
            <button className={style.handleAdd} onClick={()=>addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>

        </div>
    </div>
  )
}

export default Products

import Product from "../../product"
import Products from "./products"
import style from "./product.module.css"

const Shop = () => {
  return (
    <div className={style.shop}>
      <div className={style.shopTitle}>
       <h1 className={style.guitar}>Guitar</h1>
        <h1 className={style.hub}>Hub</h1>
      </div>
      <div className={style.products}>
        {Product.map((products)=>(
            <Products data={products}/>
        ))}
      </div>
    </div>
  )
}

export default Shop
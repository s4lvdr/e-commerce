import {Link} from "react-router-dom"
import {ShoppingCart } from "phosphor-react" 
import style from "./styles/NavBar.module.css"
const NavBar = () => {

  return (
    <>
      <div className={style.navBar}>
        <div className={style.logo}><h1 >GUITAR STORE </h1></div>
        <div className={style.links}>
          <Link to="/e-commerce/">Shop</Link>
          <Link className={style.cartlogo}to="/cart" ><ShoppingCart/></Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
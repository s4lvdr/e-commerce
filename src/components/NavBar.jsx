import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react" 
import style from "./styles/NavBar.module.css"
const NavBar = () => {

  return (
    <>
      <div className={style.navBar}>
        <div className={style.logo}><h1 >GUITAR STORE</h1></div>
        <div className={style.links}>
          <Link to="/">Shop</Link>
          <Link to="/cart" ><ShoppingCart size={30}/></Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
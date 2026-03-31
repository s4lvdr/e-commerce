import {HashRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import ShopContextProvider from "./contex/shop-contex"
import "./App.css"
function App() {

  return (
    <> 
    <div className="cont">
       <ShopContextProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
      
    </>
  )
}

export default App

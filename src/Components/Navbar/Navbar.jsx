import React, { useContext, useState, useEffect, useRef} from 'react'
import './Navbar.css'
import shop_logo from '../Assets/shop_logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"


export default function() {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)


  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);


  const [Mobile, setMobile] = useState(false)


  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'><img src={shop_logo} alt='logo' /></Link>
        <Link to='/' className='shopname'><p>ThreadTrove</p></Link>
      </div>

    
    <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
      <li onClick={()=>{setMenu("shop")}} className="nav__item"><Link style={{ textDecoration: 'none' }} to='/' className="nav__link">Shop</Link> {menu === "shop" ? <hr/> : <></>} </li>
      <li onClick={()=>{setMenu("mens")}} className="nav__item"><Link style={{ textDecoration: 'none' }} to='/mens' className="nav__link">Men</Link> {menu === "mens" ? <hr/> : <></>}</li>
      <li onClick={()=>{setMenu("womens")}} className="nav__item"><Link style={{ textDecoration: 'none' }} to='/womens' className="nav__link">Women</Link> {menu === "womens" ? <hr/> : <></>}</li>
      <li onClick={()=>{setMenu("kids")}} className="nav__item"><Link style={{ textDecoration: 'none' }} to='/kids' className="nav__link">Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
      <li><Link to='/login'><button className='login--button'>Login</button></Link></li>
    </ul>

    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
      {Mobile ? <ImCross /> : <FaBars />}
    </button>

      <div className="nav-login-cart">
        <Link to='/cart'><img src={cart_icon} alt='Cart Icon' /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>

    </nav>
  )
}

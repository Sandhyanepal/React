import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import Logo from "../Assets/images/silverspoon.jpg"


const Logo = () => {
    return (
        <a href="/">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUUUu25tsTycvzJBz4rhpvHASr2A2SOe0Z4ehrkk_Mg2bKikVNJDoOPuzxAhJr6WEv2A&usqp=CAU" alt='Silver Spoon logo' />
            {/* <img className="logo" src={Logo} alt='Silver Spoon logo' /> */}
        </a>
    )
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <nav className='navbar'>
            <Logo />
            <div className='nav-items'>
                <ul>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/"><li>Menu</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                    {
                        isLoggedIn ? <li><button onClick={() => {setIsLoggedIn(false)}}>Login</button></li> : <li><button onClick={() => {setIsLoggedIn(true)}}>Logout</button></li>
                    }
                    
                    
                </ul>
            </div>
        </nav>
  )
}

export default Header

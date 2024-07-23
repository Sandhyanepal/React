import React from 'react'

const Logo = () => {
    return (
        <a href="/">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUUUu25tsTycvzJBz4rhpvHASr2A2SOe0Z4ehrkk_Mg2bKikVNJDoOPuzxAhJr6WEv2A&usqp=CAU" alt='Silver Spoon logo' />
        </a>
    )
}

const Header = () => {



  return (
    <nav className='navbar'>
            <Logo />
            <div className='nav-items'>
                <ul>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
        </nav>
  )
}

export default Header

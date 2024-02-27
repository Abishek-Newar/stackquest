import React from 'react'
import { Link } from 'react-router-dom'
import logos from "../../assets/logos.png"
import search from "../../assets/search.svg"
import Avatar from "../../components/Avatar/Avatar"
import Button from "../../components/Button/Button"
import "./navbar.css"
const Navbar = () => {
    var User = null
  return (
    <nav>
        <div className='navbar'> 
           <Link to="/" className='nav-item nav-btn'>
            <img className='nav-logo' src={logos} alt="logo" />
           </Link>
           <Link to="/" className='nav-item nav-btn'>About</Link>
           <Link to="/" className='nav-item nav-btn'>Products</Link>
           <Link to="/" className='nav-item nav-btn'>For Teams</Link>
           <form >
             <input type="text" placeholder='search ...' />
             <img src={search} className='search-icon' alt="" width={18}/>
           </form>
           { User === null? 
           <Link to="/Auth" className='nav-item nav-links'>Log in</Link>:
           <>
               <Link to="/User" className='' style={{color: 'white', textDecoration: 'none'}}><Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"  >A</Avatar></Link>
               <button className='nav-items nav-links'>Log Out</button>
           </>
           }
        </div>
    </nav>
  )
}

export default Navbar
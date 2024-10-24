
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

  const wishlistArray=useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  
  const cartArray =useSelector((state)=>state.cartItem)
  console.log(cartArray);
  

  const [show,setshow]=useState(false)
  const change=()=>{
    setshow(!show)
  }
  return (
    <>


    <div className='w-full min-h-20 bg-violet-900 w-100 text-white md:flex items-center p-3 fixed'>
      <div className='px-5 flex w-full'>
      <Link to={'/'}><h1 className='text-4xl me-3'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#f3f1f1" }}  />  E-CART</h1></Link>
      <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} style={{ color: "#f3f1f1" }} /></button>
      </div>



      { show && 
        <div className='mt-4 flex ms-auto md:hidden'>
        <Link to={'/wishlist'}><button className='flex items-center border py-3 px-4 text-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{ color: "#e3022f"}} className='me-2'/>Wishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span></button></Link>
        <Link to={'/cart'}><button className='flex items-center border px-4 py-3 ms-3 text-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#1d6e07" }} className='me-2'/> Cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray?.length}</span></button></Link>

      </div>
      }

      <div className='md:flex me-7 ms-auto hidden'>
        <Link to={'/wishlist'}><button className='flex items-center border py-3 px-4 text-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{ color: "#e3022f"}} className='me-2'/>Wishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span></button></Link>
        <Link to={'/cart'}><button className='flex items-center border px-4 py-3 ms-3 text-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#1d6e07" }} className='me-2'/> Cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray?.length}</span></button></Link>

      </div>
      
    </div>
    
    
    
    
    
    </>
  )
}

export default Header
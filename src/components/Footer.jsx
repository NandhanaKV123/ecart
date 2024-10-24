import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div className=' p-2 text-white '>
            <h1 className='text-4xl'><FontAwesomeIcon icon={faCartShopping} />  E-CART</h1>
            <p className='pt-3 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, dignissimos omnis. Aperiam non quae tempora deserunt excepturi temporibus eos sapiente ut facilis voluptatum minima recusandae in, ipsam animi, nobis reprehenderit.</p>
        </div>
        <div className='p-2 text-white'>
            <h1 className='text-4xl'>LINKS</h1>
            <div className='p-3'>
              <Link to={'/'}><p><a href=''>Home</a></p></Link>
              <Link to={'/wishlist'}><p className='pt-1'><a href=''>Wishlist</a></p></Link>
              <Link to={'/cart'}><p className='pt-1'><a href=''>Cart</a></p></Link>
            </div>
            

        </div>
        <div className=' p-2 text-white'>
        <h1 className='text-4xl'>GUIDES</h1>
            <div className='p-3'>
              <p><a href=''>React</a></p>
              <p className='pt-1'><a href=''>React bootstrap</a></p>
              <p className='pt-1'><a href=''>Bootswatch</a></p>
            </div>
        </div>
        <div className='p-2 text-white'>
          <h1 className='text-4xl'>CONTACT US</h1>
          <input className='m-2 rounded p-1 mt-3' type="text" placeholder='Email Id' />   <button className='btn bg-orange-600 rounded p-1'>Subscribe</button>

          <div className='flex justify-between md:pe-44 pt-3 text-4xl'>
            <button><FontAwesomeIcon icon={faTwitter} /></button>
            <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
            <button><FontAwesomeIcon icon={faFacebook} /></button>
            <button><FontAwesomeIcon icon={faInstagram} /></button>
          </div>
        </div>


    </div>
  )
}

export default Footer
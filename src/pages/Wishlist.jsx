import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistitem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'



function Wishlist() {

  const wishlistArray=useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  const dispatch=useDispatch()

  const wishes=(item)=>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistitem(item.id))
  }
  
  return (
    <>

    <h1 className='text-center text-4xl text-violet-900 pt-32'>Wishlist</h1>
    
    { wishlistArray?.length>0?
    
    <div className=' mt-5 mb-10 px-10 md:grid grid-cols-4'>


      {wishlistArray?.map((item)=>(
        <div className='p-2'>
        <div className='p-3 rounded shadow-lg'>
          <img src={item?.image} className='w-full h-60' alt="no image" />
          <h4 className='text-center text-3xl'>{item?.title.slice(0,38)}...</h4>
          <p className='text-justify'>{item?.description?.slice(0,100)}...</p>
          <p className='text-2xl text-center'>Price : <span className='text-violet-600'> {item?.price}</span></p>
          <div className='flex justify-between'>
            <button onClick={()=>dispatch(removeWishlistitem(item?.id))} className='p-3 bg-red-700 text-white rounded'><FontAwesomeIcon icon={faTrashCan} /></button>
            <button onClick={()=>wishes(item)} className='p-3 bg-green-700 text-white rounded'><FontAwesomeIcon icon={faCartShopping}/></button>
          </div>
        </div>
      </div>
      ))}
      


    </div>

    :

    <div className='w-full mt-10 md:grid grid-cols-3'>
      <div></div>
      <div className='md:ps-28 ps-12'>
        <img src="https://doukani.com/img/emptywishlist.jpg" className='h-80 w-75' alt="" />
      </div>
      <div></div>
    </div>
    
    }
    
    
    </>
  )
}

export default Wishlist
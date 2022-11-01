import React from 'react'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineDelete}  from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, decrease, getTotal, removeFromCart } from '../store/slices/ProductSlice'
 function CartDesing(props) {
    const product = useSelector(state => state.ProductSlice)
    console.log(product)
    const dispatch = useDispatch()
useEffect(() => {
  dispatch(getTotal())
}, [product])
    return (
        <div className='w-[1400px]  h-screen mx-auto  '>
         {product.cartItems.length === 0 ? (<p>Opps your cart is empty</p>) : (
           <div className=' flex flex-col items-center'> 
          {
            product.cartItems?.map((item, index)=>(
              <div className='flex  justify-between border-b pt-2 mr-10  w-[1000px]'>
              <div className='flex '>
              <img className='w-[80px] pb-1 mr-4 h-[80px] rounded-full object-cover' src={item.image} alt="pizza" />     <div className='ml-5'>
                  <p className='text-xl'>{item.name}</p>
                  <span className='text-xl'>{item.priceNum}$</span>
                </div>
              </div>
             
              {/* count */}
              <div className='flex'>
                <AiOutlineMinus size={30} onClick = {()=> dispatch(decrease(item))}/>
                <span className=' w-[30px] h-[25px]  bg-orange-600 text-white/60 text-center'>{item.cartQuantity}</span>
  <AiOutlinePlus size={30} onClick={()=>dispatch(addToCart(item))}/>
              </div>
              <div>
                <span className='text-xl'>{item.priceNum * item.cartQuantity}$</span>
              </div>
              <div className='cursor-pointer'>
                <AiOutlineDelete size={30} onClick={()=>dispatch(removeFromCart(item))}/>
              </div>
  
  
            </div>
            ))
          }
 
 
           {/* Total */}
          <div className='w-[900px] border-b  flex justify-center items-center flex-col mt-4'>
           <h2 className='text-xl text-center font-bold text-orange-600'>Your SubTotal</h2>
           <div className=' flex px-5 m-2 '>
             <p className='text-lg mr-2 py-4 font-medium'>Subtotal: </p>
             <span className='text-lg ml-2 py-4 font-medium' > ${product.cartTotalAmount}</span>
           </div>
           <button className='ml-2  border-none font-medium bg-orange-600 text-white hover:bg-white hover:text-orange-600 mb-2'>Confirm Order</button>
          </div>
           </div> 
         )}
        </div>
    )
}
export default CartDesing
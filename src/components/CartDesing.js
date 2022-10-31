import React from 'react'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineDelete}  from 'react-icons/ai'
 function CartDesing(props) {
    

    return (
        <div className='w-[1400px]  h-screen mx-auto  '>
          <div className=' flex sm:flex-col lg:flex-row items-center'> 
          <div className='flex justify-between border-b pt-2 mr-10  w-[900px]'>
            <div className='flex '>
            <img className='w-[80px] pb-1 mr-4 h-[80px] rounded-full object-cover' alt="pizza" />     <div className='ml-5'>
                <p className='text-xl'>Pizza</p>
                <span className='text-xl'>20$</span>
              </div>
            </div>
           
            {/* count */}
            <div className='flex'>
              <AiOutlineMinus size={30}/>
              <span className=' w-[30px] h-[25px]  bg-orange-600 text-white/60 text-center'>1</span>
<AiOutlinePlus size={30}/>
            </div>
            <div>
              <span className='text-xl'>Total</span>
            </div>
            <div>
              <AiOutlineDelete size={30}/>
            </div>


          </div>


          {/* Total */}
         <div className='w-[400px] h-[600%] border-b '>
          <h2 className='text-xl text-center font-bold text-orange-600'>Your SubTotal</h2>
          <div className='flex  px-5 '>
            <p className='text-lg mr-2 py-4 font-medium'>Subtotal</p>
            <span className='text-lg ml-2 py-4 font-medium' >100$</span>
          </div>
          <button className='ml-2 font-medium bg-orange-600 text-white hover:bg-white hover:text-orange-600 mb-2'>Confirm Order</button>
         </div>
          </div> 
        </div>
    )
}
export default CartDesing
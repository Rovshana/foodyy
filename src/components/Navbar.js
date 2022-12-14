import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillWallet} from 'react-icons/ai'
import {BsCart4, BsTruck, BsQuestionCircleFill} from 'react-icons/bs'
import {MdOutlineFavorite} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export function Navbar(props) {
    const [show, setShow] = useState(false)
    const {cartTotalQuantity} = useSelector(state => state.ProductSlice)
    console.log(cartTotalQuantity)
    
    const navigate = useNavigate()

    return (
         <div className='max-w-[1400] mx-auto flex justify-between items-center p-4 mb-10 fixed z-10 top-0  w-full '>
        {/* //     leftSide start */}
            <div className='flex items-center '>
            <div className='cursor-pointer' onClick={()=>setShow(!show)}>
                <AiOutlineMenu size={38} />
            </div>
            <h1 className='text-2xl sm:text-2xl lg:text-2xl px-2'>
             <span className='font-bold text-orange-600'>Foodyy</span> 
            </h1>
            <div className='hidden lg:flex bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black rounded-full p-2 text-white'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
            </div>
            {/* leftSide end */}
            {/* searchInput */}

            <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20}/>
                <input type='text' placeholder='search food' className='bg-transparent p-2 focus:outline-none w-full'/>
            </div>
            {/* cart */}
    <div onClick={()=>navigate('/cartpage')} className="cursor-pointer realtive">
            <BsCart4  size={40}  /> 
            <span className='absolute top-2 right-3 bottom-8 text-xl text-white bg-orange-600 w-[25px] h-[25px] text-center rounded-full'>{cartTotalQuantity}</span>
            </div>
            {/* mobile menu */}
{show?  <div className=' fixed  w-full h-screen z-10 top-0 left-0'></div>: ''}
           
            {/* sidebar */}
        {show ? <div className='fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duaration-300'>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer'  onClick={()=>setShow(!show)}/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Foods</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='flex text-xl py-4'>
                            <BsTruck size={25} className='mr-4'/> Orders
                        </li>
                        <li className='flex text-xl py-4'>
                            <MdOutlineFavorite size={25} className='mr-4'/> Favorites
                        </li>
                        <li className='flex text-xl py-4'>
                            <AiFillWallet size={25} className='mr-4'/> Wallet
                        </li>
                        <li className='flex text-xl py-4'>
                            <BsQuestionCircleFill size={25} className='mr-4'/> Help
                        </li>
                    </ul>
                </nav>

            </div>  : ''}    
           
        </div>
    )
}

import React from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {
  addToCart,
  decrease,
  getTotal,
  removeFromCart,
} from "../store/slices/ProductSlice";
export function Basket(props) {
    const navigate = useNavigate()
  const product = useSelector((state) => state.ProductSlice);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [product]);
  return (
    <>
      <div className="p-5">
        <div className="flex justify-center text-5xl">Your Basket</div>
        <div className="flex justify-between items-center mt-4">
          <button onClick={()=>navigate('/')} className="bg-orange-600 text-white border-none p-2 hover:bg-white hover:text-orange-600 ">
            Continue
          </button>
         
        </div>
        {/* central div */}

        <div className="flex sm: flex-col lg:flex-row  mt-7">
          <div className="flex  flex-col flex-1 ">
            {/* listOf product */}

            {product.cartItems?.map((item, index) => (
              <div>
                <div className="flex  items-center w-[100%] h-auto  ">
                  <div className="flex self-start pl-5">
                    <img
                      className=" hover:scale-105 duration-300 w-[7rem] h-[80%] rounded-full shodow-lg"
                      src={item.image}
                      alt=".."
                    />

                    <div className="mt-3 ml-5 flex flex-col">
                      <p>
                        <b>Product: </b>
                        {item.name}
                      </p>
                      <p>
                        <b>Product Price: </b>
                        ${item.priceNum}
                      </p>
                      
                      <div className='cursor-pointer flex'>
                       <b>Remove: </b> 
                <AiOutlineDelete size={20} onClick={()=>dispatch(removeFromCart(item))}/>
              </div>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center flex-auto">
                    <div className="flex ">
                      <span className="text-2xl sm:hidden  mr-5">Quantity:</span>
                      <AiOutlineMinus className="cursor-pointer" size={30} onClick = {()=> dispatch(decrease(item))}/>
                      <span className=" w-[30px] h-[25px]  bg-orange-600 text-white/60 text-center">
                       {item.cartQuantity}
                      </span>
                      <AiOutlinePlus size={30}  className="cursor-pointer"onClick={()=>dispatch(addToCart(item))}/>
                    </div>
                    <div className="flex justify-center items-center text-3xl mt-3">
                    <p>${item.priceNum * item.cartQuantity} </p>
                    </div>
                  </div>
                </div>
                <hr className="bg-red-300 mt-7 mb-7" />
              </div>
            ))}
          </div>
          {/* summary */}
          <div className="bg-orange-500  text-white flex-[0.4] w-auto h-[40vh] border-2 rounded-md shadow-lg">
            <h2 className="text-center text-[2rem]">Summary</h2>
            <div className="flex justify-between text-3xl font-bold mt-3 w-[100%] mb-10">
                <p className="ml-10">Total cost: </p>
                <span className="mr-10">${product.cartTotalAmount}</span>
            </div>
            <div className="flex justify-center items-centerblock content-center mt-10 mb-10 ">
            <button
              className="bg-white  text-orange-600 border-none w-[300px] font-bold p-2"
             
            >
              Checkout now
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

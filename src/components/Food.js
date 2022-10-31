
import React, { useState, useEffect } from 'react'
import { foodApi } from '../Api'

export function Food(props) {
    const [data, setData] = useState([])
   
    useEffect(() => {
      getData()  
    }, [])
    const getData = ()=>{
        (foodApi).then(res=>{
            setData(res.data.food)
        }).catch(err=>{
            console.log(err)
        })
    }
    // filter type
const filterFood = (type)=>{
setData(data.filter((item)=> item.category === type ))

}
const filterPrice = (price)=>{
    setData(data.filter((item)=> item.price === price))
}
    return (
        <div className='max-w-[1400px] mx-auto px-4 py-12'> 
        <div>
            <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>
            {/* filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* filter type */}

                <div >
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>filterFood(data)} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=>filterFood('salad')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                        <button onClick={()=>filterFood('burger')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                        <button  onClick={()=>filterFood('pizza')}className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button  onClick={()=>filterFood('chicken')}className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
            </div>
            {/* displaying foods */}

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    data?.map((item, index)=>(
                        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300" >
                            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg"/>
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <span className='bg-orange-600 p-1 text-white rounded-lg'>{item.priceNum} $</span>
                            </div>


                        </div>

                    ))
                }
            </div>



            </div>
            
        </div>
    )
}

import React from 'react'

 function HeadlineCards(props) {
    

    return (
        <div className='max-w-[1400px] mx-auto p-4 py-12 grid  md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='relative rounded-xl'>
                {/* card content */}
                <div className='w-full h-full rounded-xl absolute bg-black/50 text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'> sun's, Bogo out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='bg-white border-white text-black mx-2 absolute  bottom-4'>Order now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover ' src='https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="food" />
            </div>
            {/* card */}
            <div className='relative rounded-xl'>
                {/* card content */}
                <div className='w-full h-full rounded-xl absolute bg-black/50 text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'> New Restaurants</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='bg-white border-white text-black mx-2 absolute  bottom-4'>Order now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover ' src='https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="food" />
            </div>
            {/* card */}
            <div className='relative rounded-xl'>
                {/* card content */}
                <div className='w-full h-full rounded-xl absolute bg-black/50 text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Desserts</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='bg-white border-white text-black mx-2 absolute  bottom-4'>Order now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover ' src='https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="food" />
            </div>
            
        </div>
    )
}
export default HeadlineCards
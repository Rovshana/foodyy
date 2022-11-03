import React from 'react'

 function Hero(props) {
    

    return (
        <div className='max-w-[1400px] mx-auto p-4 relative mt-2'>
        <div className='max-h-[500px]'>
            <div className='w-full h-full absolute text-gray-200 max-h-[500px] bg-black/75 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bold'>The <span className="text-orange-500">Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bold text-orange-500'>Foods <span className='text-gray-200'>Delivered</span></h1>
               
            </div>
            <img  className="w-full max-h-[500px] object-cover" src='https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="pasta" />
            
        </div>
        </div>
    )
}
export default Hero
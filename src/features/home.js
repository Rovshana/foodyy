import React from 'react'
import Hero from '../components/Hero'
import HeadlineCards from '../components/HeadlineCards'
import Food from '../components/Food'
 function HomeContainer(props) {
    

    return (
        <>
          <Hero/> 
          <HeadlineCards/>
          <Food/>
        </>
    )
}
export default HomeContainer
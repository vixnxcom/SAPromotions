import React from 'react'
import styles from '../../style'
import Hero from './Hero'
import Texthero from './Texthero'


const Home = () => {
  return (
    <div className='w-full top-0 overflow-hidden '> 

      <div className='h-screen bg-black'>
        
      <div className={`${styles.flexCenter} bg-hero h-[60vh] `}>
      <div className={`${styles.boxWidth}`}>
      <Hero />
      </div>
      </div>
       
      <div className={`${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
      <Texthero />
      </div>
      </div>

      </div>

       


    </div>
  )
}

export default Home

import React from 'react'
import styles from '../../style'
import Hero from './Hero'
import Texthero from './Texthero'
import Works from '../about/Works'
import Details from '../about/Details'
import { poster } from '../../assets'


const Home = () => {
  return (
    <div className='w-full top-0 '> 

      <div className='md:h-auto   bg-black '>
        
      <div className={`${styles.flexCenter} bg-hero  h-[60vh]  `}>
      <div className={`${styles.boxWidth}`}>
      <Hero />
      </div>
      </div>

      <div className='mb-2 mt-2'>
        <img src={poster} alt="" />
      </div>
       
      <div className={`${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
      <Texthero />
      </div>
      </div>

      </div>

      <div className={`${styles.flexCenter}  bg-bluee`}>
      <div className={`${styles.boxWidth}`}>
      <Works/>
     
      </div>
      </div>



    </div>
  )
}

export default Home

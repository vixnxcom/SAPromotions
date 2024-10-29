import React from 'react'
import styles from '../../style'
import Head from './Head'
import Button from './Button'

const Plan = () => {
  return (
    <div className='w-full '>
        <div className='h-[120px] bg-white'></div>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
           <Head />
        </div>     
      </div>
    
      <div className='h-[80px] bg-white'></div>
    </div>
  )
}

export default Plan

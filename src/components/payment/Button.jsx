import React from 'react'
import styles from '../../style'

const Button = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center `}>
    <div className=''>
    <button className='mx-auto ticket-button '>
    <p 
     className='neue-regular text-white text-[20px] shadoww'>Buy Plan</p>
    </button>
    </div>
</div>
  )
}

export default Button

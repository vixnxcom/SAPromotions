import React from 'react'
import styles from '../../style'

const Head = () => {
  return (
    <div className='bg-white'>
        
        {/* premium */}
    <div className={`${styles.flexStart} ${styles.paddingX} flex-col text-black mt-10 mb-10 `}>
        <h1 className='text-[6vw] font-bold neue-medium'>Starter Plan</h1>
        <p className='text-[5vw] neue-thin mt-2'>Simple and effective packages</p>
    </div>
    {/* premium */}
    
       {/* 5k plan */}  
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col p-4`}>

        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          5,000 Naira Ad Plan
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
       Inclusive of a Link and Writeup posted to 500 Groups daily (+ free status post)
              for 2 DAYS
        </p>
     
      
    </div>
    

       {/* 7k plan */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col mt-5 p-4`}>
     
        
        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          7,500 Naira Ad Plan
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
       Inclusive of a Link, Writeup and Photo posted to 500 Groups daily (+ free status post)
              for 2 DAYS
        </p>
        
      
    </div>
  
       {/* 10k plan */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col mt-5 p-4`}>
     
        
        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          10,000 Naira Ad Plan
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
       Inclusive of a Link, Writeup and Video posted to 500 Groups daily (+ free status post)
              for 2 DAYS
        </p>
        
      
    </div>
    {/* premium */}
    <div className={`${styles.flexStart} ${styles.paddingX} flex-col text-black mt-10 mb-10 `}>
        <h1 className='text-[6vw] font-bold neue-medium'>Premium Plan</h1>
        <p className='text-[5vw] neue-thin mt-2'>Higher and most effective packages</p>
    </div>
    {/* premium */}

       {/* 10k premium plan */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col mt-5 p-4`}>
     
        
        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          10,000 Naira Ad Premium Plan
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
       Inclusive of a Link and Writeup posted to 500 Groups daily (+ free status post)
            <br />  for 4 DAYS
        </p>
        
      
    </div>

       {/* 15k premium plan */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col mt-5 p-4`}>
     
        
        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          15,000 Naira Ad Premium Plan
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
       Inclusive of a Link, Writeup and Photo posted to 500 Groups daily (+ free status post)
              for 4 DAYS
        </p>
      
    </div>
   
       {/* 15k plan */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col mt-5 p-4`}>
     
        
        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          20,000 Naira Ad Premium Plan
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
       Inclusive of a Link, Writeup and Video posted to 500 Groups daily (+ free status post)
              for 4 DAYS
        </p>
        
      
    </div>
       {/* 15k plan */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-bluee flex flex-col mt-5 p-4`}>
     
        
        <h1 className='neue-medium font-bold text-[6vw] text-white'>
          Bonus Package
        </h1>
        <p className='text-white text-[5vw] neue-thin w-[80vw]'>
        50 Free Active Whatsapp Market Group Links (Reserved for only the higher packages)
        </p>
        
      
    </div>
    
    
    </div>
    
  )
}

export default Head

import React from 'react';
import Package from './Package';
import Details from './Details';
import Payment from './Payment';
import Posting from './Posting';
import Results from './Results';

const Works = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full mt-10">
      <div className="flex items-center justify-center">
        <h1 className="text-[8vw] text-white neue-medium text-center">HOW IT WORKS</h1>
      </div>
      <div className="mt-5 flex justify-center flex flex-col">
        <div className='bg-white rounded-full p-4 h-[80px] w-[80px] bg-white mx-auto mt-2 mb-2'>
           <h1 className='text-black text-[32px] mx-1 neue-medium'>01.</h1>
       </div>
        <Package />
      </div>
      <div className="mt-5 flex justify-center flex flex-col">
        <div className='bg-white rounded-full p-4 h-[80px] w-[80px] bg-white mx-auto mt-2 mb-2'>
           <h1 className='text-black text-[32px] mx-1 neue-medium'>02.</h1>
       </div>
        <Details />
      </div>
      
    
      <div className="mt-5 flex justify-center flex flex-col">
        <div className='bg-white rounded-full p-4 h-[80px] w-[80px] bg-white mx-auto mt-2 mb-2'>
           <h1 className='text-black text-[32px] mx-1 neue-medium'>03.</h1>
       </div>
        <Payment />
      </div>
      <div className="mt-5 flex justify-center flex flex-col">
        <div className='bg-white rounded-full p-4 h-[80px] w-[80px] bg-white mx-auto mt-2 mb-2'>
           <h1 className='text-black text-[32px] mx-1 neue-medium'>04.</h1>
       </div>
        <Posting />
      </div>
      <div className="mt-5 flex justify-center flex flex-col mb-16">
        <div className='bg-white rounded-full p-4 h-[80px] w-[80px] bg-white mx-auto mt-2 mb-2'>
           <h1 className='text-black text-[32px] mx-1 neue-medium'>05.</h1>
       </div>
        <Results />
      </div>
      
   
      
    </div>
  );
};

export default Works;

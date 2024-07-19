import React, { useState } from 'react';
import { arrow } from '../../assets';
import styles from '../../style';

const GoalList = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section className=' mb-20'>
      <div>
          {/* card 1 */}
          <div className='  mt-5 mb-5'>
        <div className='goals  '>
          <div className={` ${styles.flexCenter} w-[120px] h-[120px]   rounded-full mt-20  mx-10  `}>
     
         <img src={arrow} alt="" className=' w-[100px] h-[100px] mx-auto mt-20' />
        </div>
        
        </div>
        {/* text area */}
        <div className={`${styles.marginX}`}>
        <h1 className='neue-medium font-semibold mt-2 mb-2 text-[32px] text-white tracking-wide borderr '> Client Success:</h1>
        <p className='neue-thin text-[24px] text-white mb-10'>Partner with clients to achieve their goals and surpass their expectations 
        through tailored strategies and unwavering support.</p>
        {/* text area */}
        </div>
        </div>
        {/* card 1 */}
        {/* card 2 */}
        <div className='  mt-5 mb-5'>
        <div className='teams  '>
          <div className={` ${styles.flexCenter} w-[120px] h-[120px]   rounded-full mt-20  mx-10  `}>
     
         <img src={arrow} alt="" className=' w-[100px] h-[100px] mx-auto mt-20' />
        </div> 
        
        </div>
        {/* text area */}
        <div className={`${styles.marginX}`}>
        <h1 className='neue-medium font-semibold mt-2 mb-2 text-[32px] text-white tracking-wide borderr '> Continuous Improvement: </h1>
        <p className='neue-thin text-[24px] text-white mb-10'>Strive for excellence in all aspects of our services, constantly 
        refining our methodologies, staying abreast of industry trends, and enhancing our expertise.</p>
        {/* text area */}
        </div>
        </div>
        {/* card 2 */}
          {/* card 3*/}
      
        <div className=' mt-5 mb-5'>
        <div className='clients  '>
          <div className={` ${styles.flexCenter} w-[120px] h-[120px]   rounded-full mt-20  mx-10  `}>
     
         <img src={arrow} alt="" className=' w-[100px] h-[100px] mx-auto mt-20' />
        </div> 
        
        </div>
        {/* text area */}
        <div className={`${styles.marginX}`}>
        <h1 className='neue-medium font-semibold mt-2 mb-2 text-[32px] text-white tracking-wide borderr '> Global Reach: </h1>
        <p className='neue-thin text-[24px] text-white mb-10'>Expand our presence internationally, reaching new markets and diverse 
        audiences, while maintaining a commitment to cultural sensitivity and inclusivity.</p>
        {/* text area */}
        </div>
        </div>
        {/* card 3 */}
        {/* <li>Item 1</li>
        <li>Item 2</li> */}
        {showAll && (
          <>
              <div className='bg-toggle '>
         <div className='h-[20px] w-[100vw] bg-toggle'></div>
          {/* card 4*/}
        <div className='  mt-5 mb-5 '>
      
        <div className='leads   '>
        
          <div className={` ${styles.flexCenter} w-[120px] h-[120px]   rounded-full mt-20  mx-10  `}>
     
         <img src={arrow} alt="" className=' w-[100px] h-[100px] mx-auto mt-20' />
        </div> 
        </div> 

        {/* text area */}
        <div className={`${styles.marginX}`}>
        <h1 className='neue-medium font-semibold mt-2 mb-2 text-[32px] text-white tracking-wide borderr '>Thought Leadership: </h1>
        <p className='neue-thin text-[24px] text-white mb-10'>Position ourselve as industry leaders through innovative thought 
        leadership initiatives, publications, and speaking engagements.</p>
        {/* text area */}
        </div>
        </div>
        {/* card 4 */}
          {/* card 5*/}
        <div className='  mt-5 mb-5'>
        <div className='tots  '>
          <div className={` ${styles.flexCenter} w-[120px] h-[120px]   rounded-full mt-20  mx-10  `}>
     
         <img src={arrow} alt="" className=' w-[100px] h-[100px] mx-auto mt-20' />
        </div> 
        
        </div>
        {/* text area */}
        <div className={`${styles.marginX}`}>
        <h1 className='neue-medium font-semibold mt-2 mb-2 text-[32px] text-white tracking-wide borderr '>Teamwork: </h1>
        <p className='neue-thin text-[24px] text-white mb-10'>Cultivate a diverse and inclusive team of experts who are passionate about 
        making a difference and are dedicated to continuous learning and development.</p>
        {/* text area */}
        </div>
        </div>
        {/* card 5*/}
          {/* card 6*/}
        <div className='  mt-5 mb-5'>
        <div className='impacts '>
          <div className={` ${styles.flexCenter} w-[120px] h-[120px]   rounded-full mt-20  mx-10  `}>
     
         <img src={arrow} alt="" className=' w-[100px] h-[100px] mx-auto mt-20' />
        </div> 
        
        </div>
        {/* text area */}
        <div className={`${styles.marginX}`}>
        <h1 className='neue-medium font-semibold mt-2 mb-2 text-[32px] text-white tracking-wide borderr '>  Community Impact: </h1>
        <p className='neue-thin text-[24px] text-white mb-10'>Give back to the community through pro bono work, charitable 
        contributions, and initiatives that promote social responsibility and sustainability.</p>
        <div className='h-[20px] w-[100vw] bg-toggle'></div>
        {/* text area */}
        </div>
        </div>
        {/* card 6*/}
         </div>
          </>
        )}
      </div>
      <button onClick={handleToggle} className={`${styles.marginX} toggle-button text-white`}>
        {showAll ? 'Read Less' : 'Read More '}
      </button>
    </section>
  );
};

export default GoalList;
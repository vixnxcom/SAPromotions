import { motion } from 'framer-motion';
import { delay } from 'framer-motion/dom';
import React from 'react';

const svgVariants = {
    hidden: {
        rotate: 180,
        opacity: 0,
    },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: { delay: 1, duration: 1.5 },
    },
};

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
      
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 2,
            duration: 2.5,
            ease: 'easeInOut',
        },
    },
};

const textVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 3, // Delays the text after the SVG animation
        },
    },
};

const Package = () => {
    return (
        <div className="flex justify-center items-center bg-black md:h-auto w-full  max-w-[96vw] mx-auto flex-col  rounded-[24px]">
            {/* SVG */}
           
            <div className='bg-white  max-w-[96vw] rounded-t-[24px] h-[25vh]  mt-0 '>
            <motion.svg width="190" height="200" viewBox="0 0 240 251" fill="none" xmlns="http://www.w3.org/2000/svg"
             className='mt-4'
             variants={svgVariants}
             initial="hidden"
             whileInView="visible"
             >
<motion.path d="M238 47.3532V190.142C238 192.574 236.533 194.765 234.285 195.691L123.259 241.407C121.807 242.005 120.178 242.009 118.723 241.42L5.74791 195.67C3.48252 194.753 2 192.553 2 190.109V47.28C2 43.0426 6.27357 40.1403 10.2124 41.7028L117.288 84.179C119.675 85.1259 122.335 85.1183 124.716 84.1577L229.756 41.7888C233.699 40.1981 238 43.101 238 47.3532Z" 
fill="url(#paint0_linear_333_12)" stroke="white" stroke-width="4" 
/>
<motion.path d="M13.8244 41.7104C10.3213 40.3327 10.4875 35.3193 14.0743 34.1767L120.135 0.387976C120.927 0.13561 121.779 0.136352 122.57 0.390096L227.996 34.1785C231.573 35.3251 231.74 40.325 228.247 41.7071L122.82 83.4195C121.878 83.7925 120.828 83.7936 119.885 83.4225L13.8244 41.7104Z"
 fill="url(#paint1_linear_333_12)" />

<motion.path d="M222.645 207C222.645 228.554 203.807 246.5 179.967 246.5C156.126 246.5 137.289 228.554 137.289 207C137.289 185.446 156.126 167.5 179.967 167.5C203.807 167.5 222.645 185.446 222.645 207Z" 
fill="#0527FF" stroke="white" stroke-width="8"
variants={pathVariants}/>

<motion.path d="M165.717 211L176.403 219.652C177.303 220.381 178.633 220.195 179.298 219.246L197.717 193" stroke="#FFFF06" stroke-width="8"
variants={pathVariants}/>

<defs>
<linearGradient id="paint0_linear_333_12" x1="120" y1="35.5" x2="120" y2="244.5" gradientUnits="userSpaceOnUse">
<stop offset="0.465" stop-color="#0527FF"/>
<stop offset="1" stop-color="#06FBFB"/>
</linearGradient>
<linearGradient id="paint1_linear_333_12" x1="121" y1="0" x2="121" y2="84" gradientUnits="userSpaceOnUse">
<stop offset="0.465" stop-color="#0527FF"/>
<stop offset="1" stop-color="#06FBFB"/>
</linearGradient>
</defs>
</motion.svg>

            </div>
            {/* Heading */}
            <motion.h1
                className="text-white md:text-[3vw] text-[6vw] text-center neue-medium underline mt-4"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
            >
                Select Your Package
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="md:text-[2vw] text-[5vw] font-light max-w-md text-white text-center mt-4 mb-4 neue-thin w-[84vw]"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5,
                    delay: 2.5, // Ensures it starts after h1
                }}
            >
                Choose from one of the powerful packages designed to reach over 250,000 potential customers through 
                500 WhatsApp  groups daily.
            </motion.p>
        </div>
    );
};

export default Package;

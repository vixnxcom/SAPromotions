import { motion } from 'framer-motion';
import React from 'react';

const svgVariants = {
    hidden: {
        rotate: 180,
        opacity: 0,
    },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: {delay: 1, duration: 1.5 },
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

const Details = () => {
    return (
        <div className="flex justify-center items-center bg-black md:h-auto w-full max-w-[96vw] mx-auto flex-col  rounded-[24px]">
            {/* SVG */}
            <div className='bg-white  max-w-[96vw] rounded-t-[24px] h-[25vh]  mt-0 '>
            <motion.svg width="160" height="200" viewBox="0 0 179 230" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-4'
             variants={svgVariants}
             initial="hidden"
             whileInView="visible"
             >

<path d="M72 96C100.515 96 124 75.1504 124 49C124 22.8496 100.515 2 72 2C43.4846 2 20 22.8496 20 49C20 75.1504 43.4846 96 72 96Z" fill="url(#paint0_linear_336_21)"/>
<path d="M152 177V222C152 225.314 149.314 228 146 228H8C4.68629 228 2 225.314 2 222V177C2 135.579 35.5786 102 77 102C118.421 102 152 135.579 152 177Z" fill="url(#paint1_linear_336_21)" />
<motion.path d="M176.678 181C176.678 203.789 156.81 222.5 132 222.5C107.19 222.5 87.3223 203.789 87.3223 181C87.3223 158.211 107.19 139.5 132 139.5C156.81 139.5 176.678 158.211 176.678 181Z"
 fill="#0527FF" stroke="white" stroke-width="8"  variants={pathVariants}
 />
<motion.path d="M115.75 185L126.436 193.652C127.336 194.381 128.666 194.195 129.331 193.246L147.75 167" stroke="#FFFF06" stroke-width="8"/>
<defs>
<linearGradient id="paint0_linear_336_21" x1="38.8831" y1="-6.35398" x2="69.1096" y2="126.187" gradientUnits="userSpaceOnUse">
<stop offset="0.200272" stop-color="#FFFF06"/>
<stop offset="0.685816" stop-color="#FFB005"/>
</linearGradient>
<linearGradient id="paint1_linear_336_21" x1="26" y1="85.0442" x2="67.1963" y2="277.638" gradientUnits="userSpaceOnUse">
<stop offset="0.200272" stop-color="#FFFF06"/>
<stop offset="0.685816" stop-color="#FFB005"/>
</linearGradient>
</defs>
</motion.svg>


</div>


            {/* SVG */}
            
            

            {/* Heading */}
            <motion.h1
                className="text-white md:text-[3vw] text-[6vw] text-center neue-medium underline mt-4"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
            >
                Provide Your Details
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
              After selecting your package, you'll fill out a quick form to share your product link, photo, or video,
               along with any specific instructions for targeting.

            </motion.p>
        </div>
    );
};

export default Details;

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
        transition: { duration: 1.5 },
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

const Results = () => {
    return (
        <div className="flex justify-center items-center bg-black md:h-auto w-full max-w-[96vw] mx-auto flex-col rounded-[24px]">
            {/* SVG */}
            <div className='bg-white  max-w-[96vw] rounded-t-[24px] h-[25vh]  mt-0 '>
            <motion.svg width="160" height="200" viewBox="0 0 160 200" fill="none"
             xmlns="http://www.w3.org/2000/svg" className='mt-4'
             variants={svgVariants}
            initial="hidden"
            whileInView="visible">

<motion.path d="M112.433 2L158 30.116V198H2V2H112.433Z" fill="url(#paint0_linear_336_64)" 
stroke="#FF0202" stroke-width="4"
variants={pathVariants}
/>
<motion.path d="M18 129L49 93L87 116L132 68" stroke="white" stroke-width="12"
variants={pathVariants}
/>
<motion.path d="M141.742 57.6142L140.904 77.1587L122.355 60.2271L141.742 57.6142Z" fill="white"
variants={pathVariants}
/>
<defs>
<linearGradient id="paint0_linear_336_64" x1="14" y1="-2.06029e-06" x2="68" y2="299" gradientUnits="userSpaceOnUse">
<stop offset="0.404283" stop-color="#FF0202"/>
<stop offset="1" stop-color="#0527FF"/>
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
                Results Guaranteed
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="md:text-[2vw] text-[5vw] font-light max-w-md text-white text-center mt-4 mb-5 neue-thin w-[84vw]"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5,
                    delay: 2.5, // Ensures it starts after h1
                }}
            >
             If you don’t see results within 7 days, you can request a refund. But we’re confident your customers will be 
             flooding your DMs in no time!

            </motion.p>
        </div>
    );
};

export default Results;


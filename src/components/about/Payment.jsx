import { motion } from 'framer-motion';
import React, { useState } from 'react';

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

const Payment = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <div className="flex justify-center items-center bg-black md:h-auto w-full max-w-[96vw] mx-auto flex-col rounded-[24px]">
            {/* SVG */}
            <div className='bg-white max-w-[96vw] rounded-t-[24px] h-[23vh] mt-0 '>
                <motion.svg 
                    width="200" 
                    height="170" 
                    viewBox="0 0 213 175" 
                    fill="none"  
                    className='mt-8'
                    xmlns="http://www.w3.org/2000/svg"
                    variants={svgVariants}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    onViewportEnter={() => setHasAnimated(true)} // Trigger animation once
                >
                    <motion.path d="M0 32C0 14.3269 14.3269 0 32 0H168C185.673 0 200 14.3269 200 32V136C200 149.255 189.255 160 176 160H24C10.7452 160 0 149.255 0 136V32Z" fill="url(#paint0_linear_336_32)" />
                    <line y1="48" x2="200" y2="48" stroke="white" strokeWidth="4" />
                    <line y1="60" x2="200" y2="60" stroke="white" strokeWidth="4" />
                    <motion.path d="M210.678 131C210.678 153.789 190.81 172.5 166 172.5C141.19 172.5 121.322 153.789 121.322 131C121.322 108.211 141.19 89.5 166 89.5C190.81 89.5 210.678 108.211 210.678 131Z" 
                        fill="#0527FF" 
                        stroke="white" 
                        strokeWidth="8"
                        variants={pathVariants}
                    />
                    <motion.path d="M149.75 135L160.436 143.652C161.336 144.381 162.666 144.195 163.331 143.246L181.75 117" 
                        stroke="white" 
                        strokeWidth="8"
                        variants={pathVariants}
                    />
                    <line x1="21" y1="93" x2="60" y2="93" stroke="white" strokeWidth="24" />
                    <defs>
                        <linearGradient id="paint0_linear_336_32" x1="52" y1="7" x2="125" y2="208" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F211C9" />
                            <stop offset="1" stopColor="#0527FF" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>

            {/* Heading */}
            <motion.h1
                className="text-white md:text-[3vw] text-[6vw] text-center neue-medium underline mt-4"
                variants={textVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"} // Trigger animation based on hasAnimated state
            >
                Make Payment
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="md:text-[2vw] text-[5vw] font-light max-w-md text-white text-center mt-4 mb-4 neue-thin w-[84vw]"
                variants={textVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"} // Trigger animation based on hasAnimated state
                transition={{
                    duration: 0.5,
                    delay: 2.5, // Ensures it starts after h1
                }}
            >
                Secure your spot by making payments into our account via Paystack. Payment details will be sent
                after confirming your payment plan.
            </motion.p>
        </div>
    );
};

export default Payment;

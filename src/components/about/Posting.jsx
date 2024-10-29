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

const Posting = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <div className="flex justify-center items-center bg-black md:h-auto w-full max-w-[96vw] mx-auto flex-col rounded-[24px]">
            {/* SVG */}
            <div className='bg-white max-w-[96vw] rounded-t-[24px] h-[26vh] mt-0'>
                <motion.svg
                    width="215"
                    height="180"
                    viewBox="0 0 215 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='mt-4'
                    variants={svgVariants}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    onViewportEnter={() => setHasAnimated(true)}
                >
                    <motion.path
                        d="M117.244 22.965L147.464 128.28C148.773 132.843 144.516 137.047 139.97 135.681L92.825 121.515C90.7338 120.887 88.4944 120.96 86.4488 121.724L36.9355 140.214C33.6586 141.438 30.0339 139.61 29.0692 136.248L11.5963 75.3548C10.6823 72.1696 12.5235 68.8466 15.7087 67.9326L61.338 54.8396C62.552 54.4912 63.689 53.9161 64.6889 53.1445L107.812 19.8696C111.167 17.2808 116.076 18.8916 117.244 22.965Z"
                        fill="url(#paint0_linear_336_46)"
                        stroke="#02FF81"
                        strokeWidth="4"
                        variants={pathVariants}
                    />
                    <line x1="133.208" y1="31.8524" x2="173.024" y2="5.04498" stroke="#02FF81" strokeWidth="10" />
                    <line x1="154.427" y1="96.0183" x2="202.252" y2="100.118" stroke="#02FF81" strokeWidth="10" />
                    <motion.path
                        d="M52 141L65.9384 176.019"
                        stroke="#0527FF"
                        strokeWidth="20"
                        variants={pathVariants}
                    />
                    <line x1="150.151" y1="58.0603" x2="213.508" y2="49.0093" stroke="#02FF81" strokeWidth="12" />
                    <defs>
                        <linearGradient id="paint0_linear_336_46" x1="58.2447" y1="27.6376" x2="95.7552" y2="158.362" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#02FF81" />
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
                animate={hasAnimated ? "visible" : "hidden"}
            >
                Ad Posting Begins
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="md:text-[2vw] text-[5vw] font-light max-w-md text-white text-center mt-4 mb-4 neue-thin w-[84vw]"
                variants={textVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                transition={{
                    duration: 0.5,
                    delay: 2.5, // Ensures it starts after h1
                }}
            >
                Your ad will be posted in 500 active WhatsApp groups daily. Plus, you’ll get a bonus free status post for even greater visibility.
            </motion.p>
        </div>
    );
};

export default Posting;

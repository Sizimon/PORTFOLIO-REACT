import React from 'react'
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs } from "react-icons/fa6"

const SECTION_HEIGHT = 1500;

/* MAIN SECTION */

const Hero = () => {

    const subheading = [
        "Frontend Developer",
        "Full-Stack Developer",
        "UI/UX Designer",
    ];

    return (
        <div
            className="relative w-full bg-MainDark overflow-x-hidden"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}>
            <h1 className='text-MainLight font-WorkSans uppercase text-4xl text-center pt-80 m-auto'>Szymon Samus</h1>
            <Typewriter subheading={subheading} />
            <ParallaxAbout />
            <ParallaxTechStack />
            <div
                className='absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-b from from-MainLight/0 to-MainLight'
            />
        </div>
    )
}

/* END */

/* TYPEWRITER SECTION */

const LETTER_DELAY = 0.125;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewriter = ({ subheading }) => {
    const [currentSubHeading, setCurrentSubHeading] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSubHeading((pv) => (pv + 1) % subheading.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <h2
            className='text-MainLight font-Anton uppercase text-5xl text-center m-auto pb-[400px]'
        >
            {subheading[currentSubHeading].split('').map((letter, index) => {
                return (
                <motion.span 
                initial={{
                    opacity: 1,
                }}
                animate={{
                    opacity: 0,
                }}
                transition={{
                    delay: FADE_DELAY,
                    duration: FADE_DURATION,
                    ease: 'easeInOut',
                    
                }}
                className='relative' key={`${currentSubHeading}-${index}`}>
                    <motion.span
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: index * LETTER_DELAY,
                        duration: 0,
                        
                    }}
                    >
                        {letter}
                    </motion.span>
                    <motion.span 
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        delay: index * LETTER_DELAY,
                        times: [0, 0.5, 1],
                        duration: BOX_FADE_DURATION,
                        ease: 'easeInOut',
                    }}
                    className='absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-MainLight'
                    />
                </motion.span>
            )
            })}
        </h2>
    )
}

/* END */

/* PARALLAX ABOUT SECTION */

const ParallaxAbout = () => {

    return (
        <motion.div
            className='flex flex-col items-center mx-auto max-w-5xl px-4 pb-[300px]'
        >
            <ParallaxHeader
                text="About"
                className="uppercase font-Anton text-MainLight text-5xl overflow-hidden"
            />
            <ParallaxDescription
                text="I am a Junior Frontend Developer with a passion for bringing sleek and user-friendly interfaces to life. Constantly staying updated on the latest trends and eager to contribute to innovative projects."
                className="font-WorkSans text-MainLight text-2xl text-center"
            />
        </motion.div>
    );
}

const ParallaxHeader = ({
    text,
    className,
}) => {
    const { scrollY } = useScroll();

    const opacity = useTransform(
        scrollY,
        [50, 300],
        [0, 1])
    return (
        <motion.header
            className={className}
            style={{
                opacity,
            }}
            initial={{
                x: 600,
            }}
            whileInView={{
                x: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 75,
            }}
            viewport={{
                margin: '-75px',
                once: true,
            }}
        >
            {text}
        </motion.header>
    )
}

const ParallaxDescription = ({
    text,
    className,
}) => {
    const { scrollY } = useScroll();

    const opacity = useTransform(
        scrollY,
        [50, 300],
        [0, 1]
    )
    return (
        <motion.span
            className={className}
            style={{
                opacity,
            }}
            initial={{
                x: -750,
            }}
            whileInView={{
                x: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 25,
            }}
            viewport={{
                margin: '-50px',
                once: true,
            }}

        >
            {text}
        </motion.span>
    )
}

/* END */

/* TECH STACK SECTION */

const gridVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const gridItemVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const ParallaxTechStack = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center mx-auto px-4"
        >
            {/* MAIN TECHNOLOGIES DISPLAY */}
            <motion.section className='flex flex-col justify-center text-center p-24'>
                <ParallaxTechHeader
                    text="My Technologies"
                    className="font-Anton text-MainLight uppercase text-6xl tracking-wider pb-10"
                    initial={{
                        x: -500,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                />
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                    }}
                    className='grid grid-cols-5 gap-4'
                >
                    <motion.span
                        variants={gridItemVariants}
                        className='text-7xl text-MainLight flex justify-center items-center'
                    >
                        <FaHtml5 />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='text-7xl text-MainLight'
                    >
                        <FaCss3Alt />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='text-7xl text-MainLight'
                    >
                        <FaJs />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='text-7xl text-MainLight'
                    >
                        <FaReact />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='text-7xl text-MainLight'
                    >
                        <FaNodeJs />
                    </motion.span>
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

const ParallaxTechHeader = ({
    className,
    text,
    initial,
    whileInView
}) => {
    return (
        <>
            <motion.header
                className={className}
                initial={initial}
                whileInView={whileInView}
                transition={{
                    duration: 3,
                    type: "spring",
                    stiffness: 35,
                }}
                viewport={{
                    margin: '-150px',
                    once: true,
                }}
            >
                {text}
            </motion.header>
        </>
    )
}

/* END */

export default Hero;
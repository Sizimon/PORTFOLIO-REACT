import React from 'react';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import HorizontalScroll from './HorizontalScroll';

/* PROJECT SECTION LETTER EFFECT */

const ProjectHeaderGridVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProjectHeaderGridItems = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

/* END */

/* MAIN PROJECT SECTION */

const Projects = () => {
    const overlayRef = useRef(null)
    const isInView = useInView(overlayRef, {once: true})
    useEffect(() => {
        console.log("In view:", isInView)
    }, [ isInView ])
    

    return (
    <>
       <motion.div 
       className='relative w-full overflow-x-hidden'
       >
            <motion.div
            className='grid grid-cols-8 gap-2 w-2/4 justify-center items-center mx-auto pb-96'
            variants={ProjectHeaderGridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        margin: '-150px',
                    }}

            >
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='P'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='R'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='O'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='J'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='E'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='C'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='T'
                />
                <ProjectHeadingLetters 
                variants={ProjectHeaderGridItems}
                className='text-MainDark text-7xl font-WorkSans'
                text='S'
                />
            </motion.div>
       </motion.div> 
       <HorizontalScroll />
       </>
    )
}

const ProjectHeadingLetters = ({
    className,
    variants,
    text,
}) => {
    return (
    <motion.span
    className={className}
    variants={variants}
    >
        {text}
    </motion.span>
    )
}
export default Projects;
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SmoothScroll = () => {
    return (
    <div className="bg-MainLight"> 
        <Hero />
        <div className="h-screen" />
    </div>
    );
};

// const Nav = () => {
//     return (
//         <nav className="fixed left-0 right-0 top-0 z-50
//         flex items-center justify-between px-6 py-3 text-MainLight">
//             <h1 className="font-Anton 3xl mix-blend-difference">Szymon Samus Dev.</h1>
//             <button
//             onClick={() => {
//                 document.getElementById("hero")?.
//                  scrollIntoView({
//                     behavior: 'smooth',
//                  });
//             }}
//             className="flex items-center gap-1 text-xs text-MainLight"
//             >
//                 Proceed. 
//             </button>
//         </nav>
//     );
// };

const SECTION_HEIGHT = 1000;

const Hero = () => {
    return (
        <div 
        className="relative w-full bg-MainDark"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>
            <h1 className='text-MainLight font-WorkSans uppercase text-4xl text-center pt-80 m-auto'>Szymon Samus</h1>
            <h2 className='text-MainLight font-Anton uppercase text-5xl text-center m-auto pb-[500px]'>Frontend/Fullstack Developer</h2>
            <ParallaxAbout />
            <div className='absolute bottom-0 left-0 right-0
            h-96 bg-gradient-to-b from from-MainLight/0 to-MainLight' 
            />
        </div>
    )
};

// const CenterImage = () => {
//     return (
//         <div 
//         className="sticky top-0 h-screen w-full"
//         style={{
//             backgroundImage: `url(${Background})`,
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//         }}
//         />
//     )
// }

const ParallaxAbout = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return (
    <motion.div 
    className='flex flex-col items-center mx-auto max-w-5xl px-4'
    ref={targetRef}
    initial={{
        x: 1000,
    }}
    whileInView={{
        x: 0,
    }}
    transition={{duration: 3}}
    >
        <ParallaxHeader
        text="About"
        className="uppercase font-Anton text-MainLight text-5xl"
        />
        <ParallaxDescription 
        text="My name is Szymon, I am a Frontend Developer with a passion for bringing sleek user interfaces to life."
        className="font-WorkSans text-MainLight text-2xl text-center"
        />
    </motion.div>
);
}

const ParallaxHeader = ({
    text,
    className,
    start,
    end,  
}) => {
    const { scrollY } = useScroll();

    const opacity = useTransform(
        scrollY,
        [0, 500],
        [0, 1])
    return (
        <motion.header
        className={className}
        style={{
            opacity,
        }}
        >
        {text}
        </motion.header>
    )
}

const ParallaxDescription = ({
    text,
    className,
    start,
    end,  
}) => {
    const { scrollY } = useScroll();

    const opacity = useTransform(
        scrollY,
        [0, 500],
        [0, 1]
    )
    return (
        <motion.span
        className={className}
        style={{
            opacity,
        }}
        >
        {text}
        </motion.span>
    )
}


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

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div 
        className="relative w-full bg-MainDark"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>
            <h1 className='text-MainLight font-WorkSans uppercase text-4xl text-center pt-64 m-auto'>Szymon Samus</h1>
            <h2 className='text-MainLight font-Anton uppercase text-5xl text-center m-auto'>Frontend/Fullstack Developer</h2>

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

const ParallaxInfo = () => {
    return (
    <div className='flex mx-auto max-w-5xl px-4'>
        <ParallaxTitle 
        alt="A vector of a sun"
        />
    </div>
);
}

const ParallaxTitle = ({
    text,
    className,
    start,
    end,
}) => {
 return (
    <motion.img 
        src={src}
        alt={alt}
        className={className}
    />
 )
}

const ParallaxText = ({
    text,
    className,
    start,
    end,  
}) => {
    return (
        
    )
}
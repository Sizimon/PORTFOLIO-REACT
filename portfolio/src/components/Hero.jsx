import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs } from "react-icons/fa6"

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full bg-MainDark overflow-x-hidden"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}>
      <h1 className='text-MainLight font-WorkSans uppercase text-4xl text-center pt-80 m-auto'>Szymon Samus</h1>
      <h2 className='text-MainLight font-Anton uppercase text-5xl text-center m-auto pb-[400px]'>Frontend Developer</h2>
      <ParallaxAbout />
      <ParallaxTechStack />
      <div
        className='absolute bottom-0 left-0 right-0
            h-[500px] bg-gradient-to-b from from-MainLight/0 to-MainLight'
      />
    </div>
  )
}

const ParallaxAbout = () => {

  return (
      <motion.div
          className='flex flex-col items-center mx-auto max-w-5xl px-4 pb-[300px]'
      >
          <ParallaxHeader
              text="About"
              className="uppercase font-Anton text-MainLight text-5xl"
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
      [100, 500],
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
              duration: 3,
              type: "spring",
              stiffness: 50,
          }}
          viewport={{
              margin: '-150px',
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
      [100, 500],
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
              duration: 3,
              type: "spring",
              stiffness: 100,
          }}
          viewport={{
              once: true,
          }}

      >
          {text}
      </motion.span>
  )
}

// TECH STACK

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
      y:0,
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

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import Taskmanager from '../assets/image/Taskmanager.png';

const SECTION_HEIGHT = 1500;

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

const Projects = () => {
    return (
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
            <motion.div
            className='flex flex-row justify-center w-full mx-auto'
            >
                <motion.div
                className='flex relative mx-[1px]'
                >
                    <motion.div
                    className='absolute flex justify-center items-center text-start bg-MainDark w-full h-full'
                    initial={{ 
                        opacity: 1,
                        y: 0,
                    }}
                    whileHover={{
                        opacity: 0,
                        y: 50,
                        duration: 0.5,
                    }}
                    >
                        <h1 className='font-WorkSans text-MainLight uppercase text-3xl'>Full-stack: Task Manager</h1>
                    </motion.div>
                    <ProjectItem
                    title='Task Manager App'
                    text='
                    A task manager app that allows users to create, update, and delete tasks.
                    The app includes a sleek calendar view and a user-friendly interface. 
                    Key features include ability to categorise tasks, set deadlines, and add notes.
                    All tasks are handled securely with JWT authentication. User credentials are secured with hashing and salting.
                    All data stored in a PostgreSQL database.
                    '
                    className='flex flex-col px-4 justify-start items-center w-full'
                    src={Taskmanager}
                    />
                </motion.div>
                <motion.div
                className='flex relative mr-[1px]'
                >
                    <motion.div
                    className='absolute flex justify-center items-center text-center bg-MainDark w-full h-full'
                    initial={{ 
                        opacity: 1,
                        y: 0,
                    }}
                    whileHover={{
                        opacity: 0,
                        y: 50,
                        duration: 0.5,
                    }}
                    viewport={{
                        once: true,
                    }}
                    >
                        <h1 className='font-WorkSans text-MainLight uppercase text-3xl'>Front-End: Restaurant Webiste</h1>
                    </motion.div>
                    <ProjectItem
                    title='Task Manager App'
                    text='
                    A task manager app that allows users to create, update, and delete tasks.
                    The app includes a sleek calendar view and a user-friendly interface. 
                    Key features include ability to categorise tasks, set deadlines, and add notes.
                    All tasks are handled securely with JWT authentication. User credentials are secured with hashing and salting.
                    All data stored in a PostgreSQL database.
                    '
                    className='flex flex-col px-4 justify-start items-center w-full'
                    src={Taskmanager}
                    />
                </motion.div>
                <motion.div
                className='flex relative mr-[1px]'
                >
                    <motion.div
                    className='absolute flex justify-center items-center text-start bg-MainDark w-full h-full'
                    initial={{ 
                        opacity: 1,
                        y: 0,
                    }}
                    whileHover={{
                        opacity: 0,
                        y: 50,
                        transition: {
                            duration: 0.5,
                        }
                    }}
                    >
                        <h1 className='font-WorkSans text-MainLight uppercase text-3xl'>Front-End: Weather App</h1>
                    </motion.div>
                    <ProjectItem
                    title='Task Manager App'
                    text='
                    A task manager app that allows users to create, update, and delete tasks.
                    The app includes a sleek calendar view and a user-friendly interface. 
                    Key features include ability to categorise tasks, set deadlines, and add notes.
                    All tasks are handled securely with JWT authentication. User credentials are secured with hashing and salting.
                    All data stored in a PostgreSQL database.
                    '
                    className='flex flex-col px-4 justify-start items-center w-full'
                    src={Taskmanager}
                    />
                </motion.div>   
                {/* <ProjectItem
                title='Task Manager App'
                text='
                A task manager app that allows users to create, update, and delete tasks.
                The app includes a sleek calendar view and a user-friendly interface. 
                Key features include ability to categorise tasks, set deadlines, and add notes.
                All tasks are handled securely with JWT authentication. User credentials are secured with hashing and salting.
                All data stored in a PostgreSQL database.
                '
                className='flex flex-col px-4 items-center w-full'
                src={Taskmanager}
                />
                <ProjectItem
                title='Task Manager App'
                text='
                A task manager app that allows users to create, update, and delete tasks.
                The app includes a sleek calendar view and a user-friendly interface. 
                Key features include ability to categorise tasks, set deadlines, and add notes.
                All tasks are handled securely with JWT authentication. User credentials are secured with hashing and salting.
                All data stored in a PostgreSQL database.
                '
                className='flex flex-col px-4 justify-start items-center w-full'
                src={Taskmanager}
                /> */}
            </motion.div>
       </motion.div> 
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

const ProjectItem = ({
    className,
    title,
    text,
    src,
    initial,
    whileInView,
}) => {

    return (
        <motion.section
        className={className}
        >
            <motion.div className='pb-6'>
                <h2 className='text-MainDark font-Anton text-3xl uppercase text-center pb-6'>{title}</h2>
                <p className='text-MainDark font-WorkSans text-lg text-center'>{text}</p>
            </motion.div>
            <motion.div>
                <motion.img src={src} />
            </motion.div>
        </motion.section>
    )
}

export default Projects;
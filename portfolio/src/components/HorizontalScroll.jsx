import React from "react";
import { useRef } from "react";
import { motion , useScroll , useTransform} from "framer-motion";
import Taskmanager from '../assets/image/Taskmanager.png';
import { FaGithub, FaGlobe } from "react-icons/fa6";

/* Array of project cards */

const cards = [
    {
        id: 1,
        title: 'InTimeTasks',
        summary: 'A Full-Stack Task Manager Web App',
        description: 'InTimeTasks is a Full-Stack Task Manager web app which allows users to create and manage tasks over any designated period of time. The app is built using React, Node.js, Express, and PostgtreSQL. \n \n The app allows users to create tasks, set deadlines, mark tasks as complete and other interesting features. The app also allows users to view tasks by day, week, or month. The app is fully responsive, can be used on any device and is hosted on Heroku.',
        url: Taskmanager,
        github: ''
    }, 
    {
        id: 2,
        title: 'Weather Tracker',
        summary: 'A simple weather tracking app',
        url: '../assets/image/Taskmanager.png',
    },
    {
        id: 3,
        title: 'Restaurant Webpage',
        summary: 'Webapp for a renown restaurant with integrated booking system',
        url: '../assets/image/Taskmanager.png',
    },
]

/* END */

/* HORIZONTAL SCROLL SECTION */

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65.5%"]);
    
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-MainDark">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-MainLight">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <ProjectCard key={card.id} title={card.title} summary={card.summary} description={card.description} url={card.url} />
                    })}
                </motion.div>
            </div>
        </section>
    )
};

/* END */

/* PROJECT CARD COMPONENT (MAPPED IN HORIZONTAL SECTION) */

const ProjectCard = ({
    title, description, id, url, summary
}) => {
    return (
        <div 
        key={id}
        className='group relative h-[600px] w-[1350px] overflow-hidden bg-MainDark whitespace-pre-line'
        >
            <div className="flex flex-col items-center">
                <h1 className='text-4xl text-MainLight font-Anton pt-10'>{title}</h1>
                <p className='text-MainLight font-WorkSans text-lg'>{summary}</p>
            </div>
            <div className="grid grid-cols-2 pt-10">
                <div className="m-auto p-4">
                    <img src={url} alt="" className="h-[350px] w-[600px]" />
                </div>
                <div className="m-auto px-16">
                    <p className='text-MainLight font-WorkSans text-lg'>{description}</p>
                    <div className='flex flex-row justify-center pt-10 text-center'>
                        <button
                        className='flex flex-row p-1 gap-2 rounded-md text-MainDark bg-MainLight mr-5'
                        >
                            <FaGithub className="h-8 w-8 text-MainDark" />
                            <p className="self-center">GitHub</p>
                        </button> 
                        <button
                        className='flex flex-row p-1 gap-2 rounded-md text-MainDark bg-MainLight ml-5'
                        >
                            <FaGlobe className="h-8 w-8 text-MainDark" />
                            <p className="self-center">View</p>
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll;
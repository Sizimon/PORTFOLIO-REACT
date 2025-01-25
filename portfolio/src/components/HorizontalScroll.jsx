import React from "react";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import { motion , useScroll , useTransform} from "framer-motion";
import Taskmanager_1 from '../assets/image/Taskmanager.png';
import Taskmanager_2 from '../assets/image/Taskmanager_2.png';
import Taskmanager_3 from '../assets/image/Taskmanager_3.png';
import { FaGithub, FaGlobe } from "react-icons/fa6";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Array of project cards */

const cards = [
    {
        id: 1,
        title: 'InTimeTasks',
        summary: 'A Full-Stack Task Manager Web App',
        description: 'InTimeTasks is a Full-Stack Task Manager web app which allows users to create and manage tasks over any designated period of time. The app is built using React, Node.js, Express, and PostgtreSQL. \n \n The app allows users to create tasks, set deadlines, mark tasks as complete and other interesting features. The app also allows users to view tasks by day, week, or month. The app is fully responsive, can be used on any device and is hosted on Heroku.',
        images: [Taskmanager_1, Taskmanager_2, Taskmanager_3],
        github: ''
    }, 
    {
        id: 2,
        title: 'GuildTracker Bot',
        summary: 'Tool for tracking guild activity in MMORPG communities.',
        images: [],
    },
    {
        id: 3,
        title: 'Weather Tracker',
        summary: 'A simple weather tracking app',
        images: [],
    },
]

/* END */

/* HORIZONTAL SCROLL SECTION */

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    
    // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65.5%"]);
    const x = useTransform(scrollYProgress, [0, cards.length], ["1.75%", `-${(cards.length - 1) * 100}%`]);

    const sectionHeight = `${100 * cards.length}vh`;

    return (
        // <section ref={targetRef} className="relative h-[300vh] bg-MainDark">
        <section ref={targetRef} className={`relative h-[${sectionHeight}] bg-MainDark`}>
            <div className="sticky top-0 flex items-center overflow-hidden bg-MainLight h-screen">
                <motion.div style={{ x }} className="flex gap-6">
                    {cards.map((card, index) => {
                        const opacity = useTransform(
                            scrollYProgress,
                            [
                                (index - 1) / (cards.length - 1),
                                (index - 0.5) / (cards.length - 1),
                                index / (cards.length - 1),
                                (index + 0.5) / (cards.length - 1),
                                (index + 1) / (cards.length -1)
                            ],
                            [0, 1, 1, 1, 0]);
                        return (
                            <motion.div key={card.id} style={{ opacity }} className="w-[90vw] h-[80vh]">
                                <ProjectCard title={card.title} summary={card.summary} description={card.description} images={card.images} />
                            </motion.div>
                        )
                        // <ProjectCard key={card.id} title={card.title} summary={card.summary} description={card.description} url={card.url} />
                    })}
                </motion.div>
            </div>
        </section>
    )
};

/* END */

/* PROJECT CARD COMPONENT (MAPPED IN HORIZONTAL SECTION) */

const ProjectCard = ({
    title, description, id, summary, images
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }


    return (
        <div 
        key={id}
        className='group relative h-full w-[90vw] overflow-hidden bg-MainDark whitespace-pre-line rounded-2xl 4k:rounded-3xl'
        >
            <div className="flex flex-col items-center 4k:pb-[10vh]">
                <h1 className='text-4xl md:text-5xl 4k:text-9xl text-MainLight font-Anton pt-10'>{title}</h1>
                <p className='text-MainLight font-WorkSans text-lg md:text-2xl 4k:text-6xl'>{summary}</p>
            </div>
            <div className="grid grid-cols-1 ap:grid-cols-2 pt-0 md:pt-10 4k:px-[5%] gap-32">
                <div className="m-auto p-4 pb-12 md:px-6 md:pb-10 w-full justify-center items-center">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt="" className="h-auto max-h-[300px] 4k:max-h-[2000px] w-auto max-w-full object-contain mx-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="m-auto px-2 md:px-6 bp:px-[20%] bp:py-[5%] ap:px-6 ap:py-0">
                    <p className='text-MainLight font-WorkSans text-sm md:text-xl 4k:text-5xl'>{description}</p>
                    <div className='flex flex-row justify-center pt-10 4k:pt-[5vh] md:pt-4 text-center'>
                        <button
                        className='flex flex-row p-1 gap-2 4k:gap-6  rounded-md text-MainDark bg-MainLight mr-5'
                        >
                            <FaGithub className="h-24 w-24 text-MainDark" />
                            <p className="self-center 4k:text-5xl">GitHub</p>
                        </button> 
                        <button
                        className='flex flex-row p-1 gap-2 4k:gap-6 rounded-md text-MainDark bg-MainLight ml-5'
                        >
                            <FaGlobe className="h-24 w-24 text-MainDark" />
                            <p className="self-center 4k:text-5xl">View</p>
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll;
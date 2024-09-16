import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs } from "react-icons/fa6"
import Hero from './Hero';
import Projects from './Projects';

export const SmoothScroll = () => {
    return (
        <div className="bg-MainLight">
            <Hero />
            <Projects />
            <div className="h-screen" />
        </div>
    );
};
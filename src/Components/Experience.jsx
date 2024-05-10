import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
    const [inView, setInView] = useState(false);
    const isMobile = window.matchMedia('(max-width: 768px)').matches;


    const { ref, inView: isVisible } = useInView({
        threshold: 0.1
    });

    useEffect(() => {
        if (isVisible) {
            setInView(true);
        }
    }, [isVisible]);

    return (
        <div className="experience" ref={ref}>
            <h4 className="experience-title">MY EXPERIENCE RESUME</h4>
            <h2 className="experience-heading">WORK & EDUCATION</h2>
            <div className="experience-contanier">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 3.5 }}
                    className="experience-content">
                    <div className="abc">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                            transition={{ duration: 3 }}
                            className="abc1">
                            <p>2021 - Present</p>
                            <p>Open Source Contributor</p>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                transition={{ duration: 3 }}
                                className="abc1">
                                <p>Dec 2023 (Intern)</p>
                                <p>CodeAlpha</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="abc">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                transition={{ duration: 3 }}
                                className="abc1">
                                <p>July 2022 (Intern)</p>
                                <p>Ezilne Technolgy Pvt Limited</p>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                            transition={{ duration: 2 }}
                            className="abc1">
                            <p>Sept 2022 (intern)</p>
                            <p>CodeSoft</p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                    transition={{ duration: 3 }}>
                  {!isMobile?<h2 className="exp-description">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />   Experience
                    </h2>:<h2 className="exp-description">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" 
                    className="pad-left"
                    />       Experience
                    </h2>}  
                </motion.div>
            </div>

            <div className="experience-contanier">
                <div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: -180 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -150 }}
                        transition={{ duration: 3 }}
                        className="study-description">
                            {isMobile?<FontAwesomeIcon icon="fa-solid fa-arrow-down" 
                    className="pad-left1"/>:   ""}
                        Education       {!isMobile?<   FontAwesomeIcon icon="fa-solid fa-arrow-right" />:""}
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 4 }}
                    className="study-content">
                    <div className="abc">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                            transition={{ duration: 3 }}
                            className="abc1">
                            <p>2024 (Bahria University)</p>
                            <p>Bachelors in Computer Science</p>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                transition={{ duration: 3 }}
                                className="abc1">
                                <p>2022 (Coursea) </p>
                                <p>Certification in React JS</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="abc">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                transition={{ duration: 3 }}
                                className="abc1">
                                <p>2023 (Udemy) </p>
                                <p>Certification in MERN TECH</p>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                            transition={{ duration: 3 }}
                            className="abc1">
                            <p>2022 (Udemy)</p>
                            <p>Certfication in JavaScript</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;

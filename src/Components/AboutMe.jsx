import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const AboutMe = () => {
    const [inView, setInView] = useState(false);

    const { ref, inView: isVisible } = useInView({
        threshold: 0.1
    });

    useEffect(() => {
        if (isVisible) {
            setInView(true);
        }
    }, [isVisible]);

    return (
        <div className="about-me" ref={ref}>
            <div className="">
                <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="about-intro">
                    <FontAwesomeIcon icon="fa-solid fa-address-card" /> INTRODUCTION OF MYSELF
                </motion.h4>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="about-heading"> I'M SOFTWARE ENGINEER, TURNING </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="about-heading">
                    <span className="green"> CONCEPTS</span> AND
                    <span className="green"> IDEAS </span>INTO
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="about-heading"> USERFRIENDLY SOFTWARE EXPERIENCE</motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="about-paragraph">
                    I specialize in connecting brands with their audience through engaging online experiences.
                    Whether it's crafting sleek user interfaces or optimizing code for performance,
                    I'm dedicated to creating impactful connections in the digital realm.
                    As a software engineer, I excel in architecting scalable solutions
                    that drive business growth. I'm a website developer committed to
                    delivering responsive designs that captivate and convert audiences.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="about-details-h">RESIDENCE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    EXPERIENCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    EDUCATION</motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="about-details">ISLAMABAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BACHELORS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BACHELORS</motion.p>
            </div>
            <motion.img
                initial={{ opacity: 0, x: -90 }}
                animate={{ opacity: inView ? 1 : 0, x: 0 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="image-about"
                src="static/images/Pasted image.png"
                alt="" />
        </div>
    );
};

export default AboutMe;

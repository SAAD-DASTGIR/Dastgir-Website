import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const Resume = () => {
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
       <div className='resume' ref={ref}>
        <div className='resume-conatiner'>
            <motion.h1 
            initial={{ opacity: 0, }} 
            animate={{ opacity: inView ? 1 : 0}}
            transition={{ duration: 3 }}
            className='resume-title'>My Resume</motion.h1>
            <motion.p 
            initial={{ opacity: 0,x:120,y:-100 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100, x:inView?0:120 }}
            transition={{ duration: 2 }}
            className='resume-description'>
            I am a skilled and versatile software developer 
            proficient in a range of technologies including Node.js, 
            React.js, PostgreSQL, MongoDB, and Prisma, complemented by expertise 
            in HTML, CSS, TypeScript, JavaScript, and Python. Holding a Bachelor's 
            degree in Computer Science from Bahria University, Islamabad, I have gained 
            hands-on experience through internships at Codsoft and Eziline Software House, 
            demonstrating proficiency in web development. My academic projects such as Rapid 
            Hire and KhabarNama showcase my prowess in leveraging technology to 
            solve real-world problems, incorporating NLP techniques 
            and data retrieval systems.
            </motion.p>
            <motion.button 
            
            animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                whileHover={{ scale: 1.1 ,color:"#0f0e0e",backgroundColor:"#64f4ab"}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                whileTap={{ scale: 1.2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            className='resume-button'>
                Download Resume
            </motion.button>
        </div>
      <motion.iframe
      initial={{ opacity: 0,y:300 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 300}}
      transition={{ duration: 3 }}
          title="Resume"
          src="static/images/Saad_resume-2.pdf"
          width="50%"
          height="650px"
          className='iframe'
      />
  </div>
    );
};

export default Resume;

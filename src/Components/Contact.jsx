import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { color, motion } from "framer-motion";
const Contact =()=>{
    const [inView, setInView] = useState(false);

    const { ref, inView: isVisible } = useInView({
        threshold: 0.1
    });
 
    useEffect(() => {
        if (isVisible) {
            setInView(true);
        }
    }, [isVisible]);
    return(
        <div className="contact" ref={ref}>
            <div className="contact-image">
                <motion.img 
                 initial={{ opacity: 0,x:-30,y:-120 }} 
                 animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -120, x:inView?0:-30 }}
                 transition={{ duration: 2 }}
                src="static/images/Screenshot from 2024-05-02 17-28-43.png" alt="" />
            </div>
            <div className="contact-container">
                <motion.h3 
                initial={{ opacity: 0, }} 
                animate={{ opacity: 3, }}   
                transition={{ duration: 3 }}
                className="contact-heading">
                    Get in Touch With Me
                </motion.h3>
                <motion.p 
                initial={{ opacity: 0,x:-30,y:120 }} 
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 120, x:inView?0:-30 }}
                transition={{ duration: 2 }}
                className="contact-paragraph">
                Feel free to reach out to me with any inquiries, collaboration opportunities, 
                or just to say hello! Whether you have a project in mind, want to discuss 
                a potential partnership, or simply want to connect, I'm always open to new 
                opportunities and conversations. You can contact me via email at
                 msaaddastgir@gmail.com. Additionally, 
                 you can connect with me on social media platforms such as LinkedIn and GitHub,
                 or send me a direct message through my website. I look forward to hearing from you!
                </motion.p>
                <motion.button 
                animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                whileHover={{ scale: 1.1 ,color:"#64f4ab",backgroundColor:"#0f0e0e"}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                whileTap={{ scale: 1.2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={()=>{window.location.href="mail:msaaddastgir@gmail.com"}}
                className="contact-button">
                    Contact Me
                </motion.button>
            </div>
        </div>
    )
}
export default Contact
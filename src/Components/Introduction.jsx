import React from "react";
import Transition from "./Transition";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";

const Introduction =()=>{
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return(

        <div className="introduction ">
            <div className="i">
            
              <motion.p
                className="intro-12"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 4 }}   
                transition={{ duration: 2 }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-code" /> 
                        Web Developer
               
                {isMobile?<motion.button
                    animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                    whileHover={{ scale: 1.1, color: "#0f0e0e", backgroundColor: "#64f4ab" }}
                    whileTap={{ scale: 1.2 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="btn-contact123"
                    onClick={()=>window.location.href="mailto:msaaddastgir@gmail.com"}
                >
                    Contact Me
                </motion.button>:<></>}
                </motion.p>
                <div className="intro-2">
                <motion.h2
                 className="hello"
                 initial={{ opacity: 0, x: 80 }} 
                    animate={{ opacity: 2, x: 0 }}   
                    transition={{ duration: 2 }}
                 >
                    HELLO  
                 </motion.h2>
                <motion.h2 
                className="iam"
                initial={{ opacity: 0, y: 550 }} 
                animate={{ opacity: 2, y: 0 }}   
                transition={{ duration: 2 }}>
                    I'M
              
                 </motion.h2>
                </div>
                

                <motion.img 
                    src="static/images/WhatsApp_Image_2024-04-29_at_8.04.20_PM-removebg-preview.png"
                    alt="Profile Image" 
                    className="image-1"
                    initial={{ opacity: 0, y: 550 }} 
                    animate={{ opacity: 2, y: 0 }}   
                    transition={{ duration: 3 }}
                    />
                    
                 <motion.img 
                    src="static/images/hero-img-bg.svg"
                    alt="Profile Image" 
                    className="image-2"
                    initial={{ opacity: 0, y: -550 }} 
                    animate={{ opacity: 2, y: 0 }}   
                    transition={{ duration: 3 }}
                />
                <motion.h2 className="saad"
                initial={{ opacity: 0, y: 70 }} 
                animate={{ opacity: 2, y: 0 }}   
                transition={{ duration: 2 }}
                
                    >SAAD DASTGIR
                
                </motion.h2>
            </div>
                 <motion.h4
                    className="intro-description"
                    initial={{ opacity: 0, y: 550 }} 
                    animate={{ opacity: 2, y: 0 }}   
                    transition={{ duration: 2 }}
                    
                >
                    
                    Software Engineer</motion.h4>
                 <img 
                    className="icon-aboutme"
                    src="static/images/scroll-down.png"
                    alt="Profile Image" 
                    // className="image-2"
                />
        </div>

    )
}

export default Introduction
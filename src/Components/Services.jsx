import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Services =()=>{
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
        <div className="services"ref={ref}>
            <motion.h4
            initial={{ opacity: 0, x: -90 }} 
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -90 }}
            transition={{ duration: 2 }}
            className="service-title">
            <FontAwesomeIcon icon="fa-solid fa-file"/>    MY EXPERIENCE RESUME
            
            </motion.h4>
            <motion.h2 
            
            initial={{ opacity: 0, x: -110 }} 
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -110 }}
            transition={{ duration: 3 }}
            className="service-area">MY SERVICE AREA</motion.h2>
            <motion.div 
            initial={{ opacity: 0, y: 250 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 250 }}
            transition={{ duration: 2 }}
            className="service-components">
                <div className="flex">
                <img className="img-service-component"src="static/images/service-icon-1.png"  />
               
               <h2 className="service-area-heading">
                
                 FRONT-END DEVELOPMENT
                </h2>
            
              

                </div>
                <p className="service-p">
                I am a skilled frontend developer specializing in the React, HTML, CSS, and JavaScript with 
                experience using the Vite build tool to create dynamic and interactive user interfaces. 
                 
                 </p>
                <div>
                    <ul className="service-list1">

                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                   </ul>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -150 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -150 }}
            transition={{ duration: 2 }}
            className="service-components">
                <div className="flex">
                <img className="img-service-component1"
                
                src="static/images/service-icon-1.png" />
                <h2 className="service-area-heading">

                 BACKEND-END OPERATION
                </h2>
                <h3 >
                </h3>

                </div>
                <p className="service-p">
                I have experience designing and implementing RESTful APIs, handling data storage 
                and retrieval from Database, and ensuring the security and integrity of user data
                 </p>
                <div>
                     <ul className="service-list2">

                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                   </ul>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 250 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 250 }}
            transition={{ duration: 2 }}
            className="service-components">
                <div className="flex">
                <img className="img-service-component"src="static/images/service-icon-1.png"  />
                <h2 className="service-area-heading">
                AI / NLP INTEGRATIONS
                </h2>
                <h3 >
                </h3>

                </div>
                <p className="service-p-3">
                I am proficient in utilizing APIs and SDKs
                AI Industries to seamlessly incorporate these large language models (LLMs) into your Web application.
                 </p>
                <div>
                      <ul className="service-list3">

                    <li>OpenAI</li>
                    <li>Gemini</li>
                    <li>Mistral</li>
                   </ul>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: -250 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -250 }}
            transition={{ duration: 2 }}
            className="service-components">
                <div className="flex">
                <img className="img-service-component"src="static/images/service-icon-1.png"  />
                <h2 className="service-area-heading">
                  UI AND UX DESIGNING
                  </h2>
                <h3 >
                </h3>

                </div>
                <p className="service-p">
                With my knowledge of UI/UX principles and design and their best practices,
                 I can create fully visually appealing and 
                 user-friendly and Creative interfaces for your web applications. 
                 </p>
                <div>
                     <ul className="service-list4">

                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Canva</li>
                   </ul>
                </div>
            </motion.div>
{/* 
            <div>
                <h3>WEBSITE DEVELOPMENT</h3>
                <p>
                    Welcome to our portfolio website! 
                    We are a prof printing company that offers a wide range of 
                    Lo rem ipsum dolor sit amet, consectetu
                 </p>
                <div>
                    <li>Research</li>
                    <li>Research</li>
                    <li>Research</li>
                </div>
            </div>

            <div>
                <h3>WEBSITE DEVELOPMENT</h3>
                <p>
                    Welcome to our portfolio website! 
                    We are a prof printing company that offers a wide range of 
                    Lo rem ipsum dolor sit amet, consectetu
                 </p>
                <div>
                    <li>Research</li>
                    <li>Research</li>
                    <li>Research</li>
                </div>
            </div>
            */}
           {/* <button>More Services</button> */}

        </div>
    )
}
export default Services
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Services =()=>{
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

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
               {isMobile? "I am also proficient in leveraging state management libraries like Redux or MobX to efficiently manage complex application states. Additionally, I have a strong grasp of modern UI/UX principles, enabling me to create visually stunning and intuitive designs that enhance user experiences. My passion for staying updated with the latest technologies drives me to continuously learn and adapt, ensuring that I deliver high-quality, cutting-edge solutions to every project I undertake.":""}  
                 </p>
                <div>
                    <ul className="service-list1">

                    <li>ReactJS</li>
                    <li>JavaScript</li>
                    <li>Tailwind </li>
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
                {isMobile?"In addition, I have a solid understanding of backend development, including designing and implementing RESTful APIs using frameworks like Express.js in Node.js environments. I excel at database management, utilizing both relational databases like MySQL and NoSQL solutions such as MongoDB to efficiently store and retrieve data. My commitment to security best practices ensures that user data remains protected, implementing encryption techniques and authentication mechanisms to safeguard against potential threats. ":""}
                 </p>
                <div>
                     <ul className="service-list2">

                    <li>NodeJS</li>
                    <li>Express</li>
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
                {isMobile?"I possess expertise in integrating APIs and SDKs from leading AI industries, such as OpenAI, Gemini, and Mistral, to seamlessly incorporate large language models (LLMs) into web applications. Whether it's leveraging OpenAI's GPT models for natural language processing tasks, harnessing Gemini's capabilities for computer vision applications, or utilizing Mistral's AI solutions for data analysis and insights, I adeptly integrate these technologies to enhance the functionality and intelligence of web applications. My proficiency in working with AI APIs and SDKs enables me to create innovative and dynamic user experiences that leverage the power of artificial intelligence to drive greater efficiency and effectiveness.":""} 
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
                 {isMobile?"I excel at crafting visually appealing, user-friendly, and creatively engaging interfaces for web applications. Leveraging tools like Figma, Sketch, and Canva, I streamline the design process and bring concepts to life with precision and creativity. From wireframing to prototyping, I ensure that every aspect of the interface is meticulously crafted to enhance usability and elevate the overall user experience. Whether it's creating intuitive navigation structures, selecting vibrant color schemes, or optimizing layout for different screen sizes, I prioritize every detail to deliver interfaces that captivate users and leave a lasting impression.":""}
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
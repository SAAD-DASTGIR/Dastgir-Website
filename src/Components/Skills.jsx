import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const skills=()=>{

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
        
        <div
        // id="skills"
        className="skill" ref={ref}>
            <div className="skill-container-main">

            <motion.div
            initial={{ opacity: 0  }} 
            animate={{ opacity: inView ? 1 : 0}}
            transition={{ duration: 2 }}
            >
            <h4 className="skill-title">PROFESSIONAL SKILL OF ME</h4>
            <h2 className="skill-heading">PROFESSIONAL SKILL</h2>
            </motion.div>
            <motion.img 
                initial={{ opacity: 0, y: 250 }} 
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 250 }}
                transition={{ duration: 4 }}
                src="src/assets/fun-cartoon-kid.png" 
                className="skill-image" />
            <motion.div 
             initial={{ opacity: 0, x: 250 }} 
             animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 250 }}
             transition={{ duration: 4 }}
            className="skill-container">
                <div>
                    <div className="skill-subcontainer">
                        <p className="green"><img className="green"src="src/assets/react (1).svg" alt="" /></p><br />
                        <p className="green">80%</p>
                    </div>
                    <p className="green">React</p>
                </div>

                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/js.svg" alt="" /></p><br />
                        <p className="green">80%</p>
                    </div>
                    <p className="green">JavaScript</p>
                </div>

                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/css3-alt.svg" alt="" /></p><br />
                        <p className="green">70%</p>
                    </div>
                    <p className="green">Tailwind CSS</p>
                </div>   
                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/node.svg" alt="" /></p><br />
                        <p className="green">75%</p>
                    </div>
                    <p className="green">Node JS</p>
                </div>   
            </motion.div>


            </div>

            <motion.div 
             initial={{ opacity: 0, y: -150 }} 
             animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -150 }}
             transition={{ duration: 4 }}
            className="skill-container1">
                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/route-solid.svg" alt="" /></p><br />
                        <p className="green">75%</p>
                    </div>
                    <p className="green">Express JS</p>
                </div>

                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/database-solid.svg" alt="" /></p><br />
                        <p className="green">80%</p>
                    </div>
                    <p className="green">MongoDB</p>
                </div>

                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/css3.svg" alt="" /></p><br />
                        <p className="green">80%</p>
                    </div>
                    <p className="green">CSS</p>
                </div>   
                <div>
                    <div className="skill-subcontainer">
                        <p><img src="src/assets/figma.svg" alt="" /></p><br />
                        <p className="green">60%</p>
                    </div>
                    <p className="green">figma</p>
                </div>   
            </motion.div>

            

        </div>
    )

}
export default skills
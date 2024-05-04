import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
const Projects=()=>{
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
        <div className="projects" ref={ref}>
            <motion.h4 
             initial={{ opacity: 0, }} 
             animate={{ opacity: inView ? 1 : 0}}
             transition={{ duration: 2 }}
             className="project-title">LATEST WORKS</motion.h4>
            <motion.h2 
            initial={{ opacity: 0, }} 
            animate={{ opacity: inView ? 1 : 0}}
            transition={{ duration: 3 }}
            className="project-heading">EXPLORE MY PROJECTS</motion.h2>
            <div className="project-container">
               <div className="project-subcontainer">
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 1 }}
                  className="p-content">Product Design</motion.p>
                  <motion.h2 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 2 }}
                  className="p-content-heading">Instant Hire Recurement
                   <br />Platform</motion.h2>
                  
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 3 }}
                  className="p-paragraph">
                  innovative job portal, designed to revolutionize your hiring process. 
                  With three comprehensive dashboards tailored for job seekers, employers, 
                  and administrators, our platform offers seamless navigation and efficient management. 
                  Explore our extensive job listings, engage with our vibrant community posts, 
                  and utilize our intuitive CV builder to craft compelling resumes. Streamline your 
                  recruitment process with our integrated interview scheduler and robust ATS implementation.
                   Our cutting-edge technology ranks resumes intelligently, ensuring the best matches for 
                   your vacancies. 
                  Experience the future of hiring with our dynamic job portal.
                  </motion.p>
                  <motion.button
                  animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                  whileHover={{ scale: 1.1 ,color:"#64f4ab",backgroundColor:"#0f0e0e"}}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  whileTap={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="project-button-1"
                  onClick={()=> window.location.href="https://github.com/SAAD-DASTGIR/Instant-Hire-NLP-based"}

                  >
                    Check out
                  </motion.button>
               </div>
               <motion.img 
               initial={{ opacity: 0,y:100 ,x:-30 }} 
               animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100, x:inView?0:-30 }}
               transition={{ duration: 3 }}
                   src="src/assets/Screenshot from 2024-05-01 20-44-12.png" 
                   className="project-image-1" />
            </div>

            <div className="project-container">
           {isMobile?(<></>):(<motion.img 
           initial={{ opacity: 0,y:100 ,x:30 }} 
           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100, x:inView?0:30 }}
           transition={{ duration: 3 }}
                   src="src/assets/khabarnam.png" 
                   className="project-image-1" 
                />)} 
               <div className="project-subcontainer">
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 1 }}
                  className="p-content">Product Design</motion.p>
                  <motion.h2 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 2 }}
                  className="p-content-heading">KhabarNama-News Information 
                   <br />Retrieval System</motion.h2>
                  
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 3 }}
                  className="p-paragraph">
                  KhabarNama epitomizes my dedication to pushing 
                  the boundaries of web development by integrating 
                  sophisticated NLP techniques with robust backend 
                  and frontend technologies. As a News Information 
                  Retrieval System, KhabarNama utilizes Node.js for its
                   backend infrastructure, providing a solid foundation for 
                   handling data processing tasks efficiently. Meanwhile, the 
                   frontend is powered by React, ensuring a seamless and dynamic 
                   user interface. Leveraging Docker for backend containerization 
                   enhances scalability and simplifies deployment processes. 
                  </motion.p>
                  <motion.button 
                  animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                  whileHover={{ scale: 1.1 ,color:"#64f4ab",backgroundColor:"#0f0e0e"}}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  whileTap={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="project-button-1"
                  onClick={()=> window.location.href="https://www.linkedin.com/posts/saad-dastgir-8357b51b2_khabarnama-nlp-dataanalysis-activity-7148252598481948674-nM-G?utm_source=share&utm_medium=member_desktop"}
                  >
                    Check out
                  </motion.button>
               </div>
               {isMobile?(<motion.img 
               initial={{ opacity: 0,y:100 ,x:-30 }} 
               animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100, x:inView?0:-30 }}
               transition={{ duration: 3 }}
                   src="src/assets/khabarnam.png" 
                   className="project-image-1" 
                />):(<></>)} 
            </div>


            <div className="project-container">
               <div className="project-subcontainer">
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 1 }}
                  className="p-content">Product Design</motion.p>
                  <motion.h2 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 2 }}
                  className="p-content-heading">IPWatchGuard-IP Tracking
                    <br />System</motion.h2>
                  
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 3 }}
                  className="p-paragraph">
                  IPWatchGuard exemplifies my expertise in building intuitive web a
                  pplications that provide tangible value to users. This IP Tracking System, 
                  developed using React, showcases my proficiency in frontend development,
                   delivering a sleek and responsive interface that allows users to effortlessly 
                   input an IP address and retrieve its geographical origin. By harnessing the power 
                   of React and CSS, coupled with the fast build tool Vite, 
                  I ensured a smooth and efficient development process while prioritizing user experience. 
                  hrough API integration, IPWatchGuard delivers instant location insights, 
                  empowering users with valuable information at their fingertips. 
                  </motion.p>
                  <motion.button 
                  animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                  whileHover={{ scale: 1.1 ,color:"#64f4ab",backgroundColor:"#0f0e0e"}}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  whileTap={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="project-button-1"
                  onClick={()=>window.location.href="https://saad-ip-location-tracker.netlify.app/"}
                  >
                    Check out
                  </motion.button>
               </div>
               <motion.img 
               initial={{ opacity: 0,y:100 ,x:30 }} 
               animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100, x:inView?0:30 }}
               transition={{ duration: 3 }}
                   src="src/assets/ip.png" 
                   className="project-image-1" />
            </div>


            <div className="project-container">
                  {isMobile? (<></>):(<motion.img 
                  initial={{ opacity: 0,y:100 ,x:-30 }} 
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100, x:inView?0:-30 }}
                  transition={{ duration: 2 }}
                   src="src/assets/jobfit.png" 
                   className="project-image-1" />)} 

               <div className="project-subcontainer">
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 1 }}
                  className="p-content">Product Design</motion.p>
                  <motion.h2 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 2 }}
                  className="p-content-heading">JobFitAnalyzer Resume Relevance
                   <br />To Job Description  Tool</motion.h2>
                  
                  <motion.p 
                  initial={{ opacity: 0, }} 
                  animate={{ opacity: inView ? 1 : 0}}
                  transition={{ duration: 3 }}
                  className="p-paragraph">
                  Introducing JobFitAnalyzer, a sophisticated full-stack application 
                  meticulously crafted to streamline the job search journey. 
                  At the heart of JobFitAnalyzer lies its unique matching score functionality, 
                  enabling users to assess the 
                  alignment of their resumes with specific job postings.
                  But JobFitAnalyzer doesn't stop there. It goes a step further by
                   identifying missing keywords in 
                  resumes and offering actionable suggestions for optimization.
                  Under the hood, JobFitAnalyzer operates on Gemini Pro for seamless
                   backend performance, while Python seamlessly handles PDF parsing,
                   enabling swift and accurate analysis of resume content.
                  </motion.p>
                  <motion.button 
                  animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
                  whileHover={{ scale: 1.1 ,color:"#64f4ab",backgroundColor:"#0f0e0e"}}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  whileTap={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="project-button-1"
                  onClick={()=> window.location.href="https://www.linkedin.com/posts/saad-dastgir-8357b51b2_im-delighted-to-introduce-jobfitanalyzer-activity-7164216530539331584-8k4v?utm_source=share&utm_medium=member_desktop"}

                  >
                    
                    Check out
                  </motion.button>
               </div>
               {isMobile? (<motion.img 
                   src="src/assets/jobfit.png" 
                   className="project-image-1" />):(<></>)} 

            </div>
            <motion.button 
            animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
            whileHover={{ scale: 1.1 ,color:"#0f0e0e",backgroundColor:"#64f4ab"}}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 1.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={()=> window.location.href="https://github.com/SAAD-DASTGIR"}
            className="more-project-button">More Projects</motion.button>
        </div>
    )
}
export default Projects
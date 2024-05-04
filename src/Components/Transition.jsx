// Transition.js
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -550 }} 
    animate={{ opacity: 2, y: 0 }}   
    transition={{ duration: 2 }}     
    >
    </motion.div>
  );
};

export default Transition;



// import { motion, AnimatePresence } from "framer-motion";

// const Transition = ({ children }) => {
//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 , i}} // Define the initial state (hidden)
//         animate={{ opacity: 1 }} // Define the animate state (visible)
//         exit={{ opacity: 0 }}    // Define the exit state (hidden)
//         transition={{ duration: 1 }} // Define the transition duration
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Transition;



import React from 'react';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
const From = () => {
    return (
         <motion.div  initial={{x:'-100vw'}}
        animate={{x:'0'}}
        
        transition={{duration:0.3}}
        exit={{y:'-100vh'}} className='flex' style={{backgroundColor:'#611f73'}}>
           <p style={{color:'black'}}>asdfgssd</p>
        </motion.div>
      
    );
}

export default From;

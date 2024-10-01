import React from 'react';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
const Name = () => {
    return (
   
      <motion.div  initial={{x:'-100vh'}}
      animate={{x:'0'}}
      transition={{duration:0.3}}
      exit={{y:'-100vh'}} className='flex' style={{backgroundColor:'cyan'}}>
        <p style={{color:'black'}}>asdfsdsd</p>
      </motion.div>
      
    );
}

export default Name;

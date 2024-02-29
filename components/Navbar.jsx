'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { useState } from 'react';


const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (

    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView={'show'}
      className={`${styles.xPaddings} py-8 relative`}
      id='navbar'
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <div id='search-box' className={`relative search-box flex items-center justify-between ${isExpanded ? '' : ''} `} onMouseEnter={toggleExpand} onMouseLeave={toggleExpand}>

          <input id='search-text' className='search-text focus:border-transparent focus:outline-none text-white bg-[#00000000]' type="text" placeholder="Search Anything" />
          <img src="/search.svg" alt="search" className='w-[24px] h-[24px] object-contain' />
        </div>
        {isExpanded ? (
          <h2 className={`hidden 2xl:block lg:absolute lg:transform lg:-translate-x-1/2 lg:left-1/2 font-bold tracking-widest text-[24px] leading-[30.24px] text-white`}> HOLOVISTA </h2>
        ) : <h2 className={`lg:absolute lg:transform lg:-translate-x-1/2 lg:left-1/2 font-bold tracking-widest text-[24px] leading-[30.24px] text-white`}> HOLOVISTA </h2>

        }

        <img src="/menu.svg" alt="Menu" className='w-[24px] h-[24px] object-contain' />

      </div>
    </motion.nav>
  );
};

export default Navbar;

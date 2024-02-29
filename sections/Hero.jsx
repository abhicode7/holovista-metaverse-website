'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import {slideIn, textVariant, staggerContainer} from '../utils/motion';
import { smoothScroll } from '../utils/self';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      > 
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>HOLOVISTA</motion.h1>
      </div>
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>METAVERSE
        </motion.h1>
      </div>
      
    <motion.div
    variants={slideIn('right', 'tween', 0.2, 1)}
    exit={{opacity: 0}}
    className='relative w-full md:-mt-[20px] -mt-[12px]'
    >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img src="/cover2.png" alt="cover" className="w-full object-cover rounded-tl-[140px] z-10 sm:h-[500px] h-[350px] relative"/>

          <a href='#explore' >
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img src="/stamp.png" alt="stamp" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' />
              </div> 
          </a>
        </motion.div>
    </motion.div>
  </section>
);

export default Hero;

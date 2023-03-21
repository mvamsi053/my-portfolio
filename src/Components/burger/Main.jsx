import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { useDimensions } from './useDimension';
import Menu from './Menu';
import { MenuToggle } from './MenuToggle';
export default function BurgerMenu() {
  const sidebar = {
    open: (height = 2000) => ({
      clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
      opacity: 1,
      transition: {
        type: 'spring',

        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(20px at 30px 30px)',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      className={` ${
        isOpen ? 'h-[100dvh]  ' : ''
      } absolute top-0 right-0 bottom-0 mobile:-top-4 z-50  mobile:min-h-[1vh] flex items-start justify-start mobile:block  sm:hidden  md:hidden lg:hidden xl:hidden desktop_xl:hidden 2xl:hidden 3xl:hidden `}
      ref={containerRef}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      tabIndex={1}
    >
      <motion.div
        variants={sidebar}
        className='absolute top-0 right-0 bottom-0  w-[100vw] bg-navy  flip_H  '
      ></motion.div>
      {<Menu toggle={() => setIsOpen(false)} isOpen={isOpen} />}
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </motion.nav>
  );
}

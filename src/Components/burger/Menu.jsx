import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '../Common/PrimaryButton';

export default function Menu({ toggle, isOpen }) {
  const { asPath } = useRouter();
  const path = asPath;
  // console.log(path);
  const menuvariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const variants2 = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' },
      },
    },
    closed: {
      x: 100,
      opacity: 0,
      transition: {
        x: { type: 'spring' },
      },
    },
  };
  
  const menus = [
    {
      id: "01.",
      name: 'About',
      link: '/#about',
      
    },
    {
      id: "02.",
      name: 'Experience',
      link: '/#work',
      
    },
    {
      id: "03.",
      name: 'Work',
      link: '/#projects',
      
    },
    {
      id: "04.",
      name: 'Contact',
      link: '/#contact',
     
    },
   
  ];
  const paths = {
   
    '/prebuilt-ai-models': 4,
    '/how-we-do': 3,
    '/what-we-do/building-ai-powered-solutions': 2,
    '/': 1,
  };
  const active = paths[asPath?.split('/')[2]];

  return (
    <motion.ul
      className={`w-[100vw] h-[100%] flex flex-col items-center  z-50 right-0 bg-navy shadow-sidebar absolute justify-evenly ${
        isOpen ? '' : 'hidden'
      }  `}
      variants={menuvariants}
    >
      <motion.li variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} className="flex w-full  items-center justify-center  ">
              <a href="#" onClick={toggle} className="w-[30%] -translate-y-5">
               <Image className="w-[8rem] -translate-y-3 h-auto object-contain" src="/assets/images/logo.png" alt="logo" width={120} height={120}/>
              </a>
                   
                
                </motion.li>
     
      {menus.map((menu) => {
        return (
          <motion.li
            key={menu.id}
            className={`cursor-pointer mb-10  `}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`${menu.link}`}
              onClick={toggle}
              className={` ${
                path === menu.link ? 'text-primary1' : 'text-gray3'
              } w-full flex-1 heading2 font-semibold flex flex-col items-center justify-center`}
            >
              <span className='text-primary1 para-lg ' >{menu.id}</span>
             <p className='heading2 font-light' >{menu.name}</p> 
            </Link>
          </motion.li>
        );
      })}
       <motion.li variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} className="flex w-full  items-center justify-center  ">
              <a href="/assets/files/Vamsi Madugundu.pdf" download>
               <PrimaryButton>
                        <p  className="text-3xl">Resume</p>
                    </PrimaryButton>
              </a>
                   
                
                </motion.li>
    </motion.ul>
  );
}

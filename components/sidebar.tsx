'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/guestbook': {
    name: 'guestbook',
  },
};


function LogoDicr() {
  // TODO document why this function 'LogoDicr' is empty
  return (
    <Link aria-label="Zeebee Siwiec" href="/">      
      <motion.svg className="text-white dark:text-black bg-black rounded-md dark:bg-white h-[50px] md:h-[80px]" 
      width="100" 
      height="80" 
      viewBox="0 0 149 114" 
      xmlns="http://www.w3.org/2000/motion.svg">     
       
        <motion.path d="M20.9393 67.9393C20.3536 68.5251 20.3536 69.4749 20.9393 70.0607L30.4853 79.6066C31.0711 80.1924 32.0208 80.1924 32.6066 79.6066C33.1924 79.0208 33.1924 78.0711 32.6066 77.4853L24.1213 69L32.6066 60.5147C33.1924 59.9289 33.1924 58.9792 32.6066 58.3934C32.0208 57.8076 31.0711 57.8076 30.4853 58.3934L20.9393 67.9393ZM42 67.5H22V70.5H42V67.5ZM38.7925 46.5H42V43.5H38.7925V46.5ZM43.5 48V66H46.5V48H43.5ZM42 46.5C42.8284 46.5 43.5 47.1716 43.5 48H46.5C46.5 45.5147 44.4853 43.5 42 43.5V46.5ZM42 70.5C44.4853 70.5 46.5 68.4853 46.5 66H43.5C43.5 66.8284 42.8284 67.5 42 67.5V70.5Z" fill="currentColor"/>
        <motion.path d="M62.622 67.8437H66.2884C69.6555 67.8437 72.1995 66.9084 73.9579 65.0378C75.7162 63.1672 76.6141 60.5483 76.6141 57.1812V56.8819C76.6141 53.6271 75.7537 51.0456 74.0701 49.175C72.3866 47.3044 69.7677 46.3691 66.251 46.3691H62.622V67.8437ZM59.3671 70.5V43.7503H66.438C70.8527 43.7503 74.1823 44.9849 76.5019 47.3792C78.8215 49.811 79.9812 52.9911 79.9812 56.8819V57.2187C79.9812 61.1469 78.8215 64.327 76.5019 66.7962C74.1823 69.2654 70.8152 70.5 66.3632 70.5H59.3671ZM85.2672 70.5V50.9334H88.3724V70.5H85.2672ZM86.7637 46.8555C86.2025 46.8555 85.7161 46.6684 85.3046 46.2569C84.8931 45.8827 84.706 45.3964 84.706 44.7978C84.706 44.2366 84.8931 43.7503 85.3046 43.3387C85.7161 42.9646 86.2025 42.7401 86.7637 42.7401C87.2874 42.7401 87.7738 42.9646 88.1853 43.3387C88.5969 43.7503 88.8213 44.2366 88.8213 44.7978C88.8213 45.3964 88.5969 45.8827 88.1853 46.2569C87.7738 46.6684 87.2874 46.8555 86.7637 46.8555ZM102.847 70.8367C100.078 70.8367 97.7585 69.9388 95.9627 68.143C94.1669 66.3472 93.269 63.9154 93.269 60.9225V60.6232C93.269 57.705 94.1669 55.2732 96.0001 53.4026C97.8333 51.532 100.078 50.5967 102.772 50.5967C105.016 50.5967 106.924 51.1579 108.496 52.2802C110.067 53.4026 110.965 55.1236 111.264 57.4431H108.196C107.748 54.5998 105.914 53.1781 102.772 53.1781C100.939 53.1781 99.442 53.889 98.2448 55.2358C97.0477 56.5826 96.4865 58.3784 96.4865 60.6232V60.9225C96.4865 63.2794 97.0477 65.0752 98.2074 66.3472C99.3672 67.6193 100.939 68.2553 102.884 68.2553C104.343 68.2553 105.615 67.8437 106.663 67.0207C107.71 66.1976 108.346 65.0004 108.496 63.4665H111.377C111.152 65.6364 110.254 67.3948 108.683 68.779C107.112 70.1633 105.166 70.8367 102.847 70.8367ZM116.065 70.5V50.9334H119.17V54.4502C119.843 53.253 120.666 52.3177 121.639 51.6442C122.612 51.0082 123.959 50.6715 125.605 50.5967V53.5148C123.435 53.6271 121.826 54.1134 120.779 55.0113C119.694 55.9092 119.17 57.518 119.17 59.7627V70.5H116.065Z" fill="currentColor"/>
      </motion.svg>
    </Link>
  );
}

function Logo() {
  return (
    <Link aria-label="Lee Robinson" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <LogoDicr />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

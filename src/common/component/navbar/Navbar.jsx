"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import DarkmodeSwitch from "../element/DarkmodeSwitch";
import { User, Wrench } from "lucide-react";
import Buttons from "../element/Buttons";

// const Logos = dynamic(() => import('./Logo'), {
//   ssr: false
// })

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-sm" : "",
        `w-full transition-all duration-300 mx-auto bg-[#ffffffd0] dark:bg-[#000000d0]  max-w-[1500px]  border-b-[1px] border-neutral-300 dark:border-neutral-800 py-3 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex  z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-start"
          >
            {/* <Logos /> */}
            <img src="/WNCH.png" alt="WNCH Logo" className="h-10 w-auto scale-[2.5] md:scale-[3] origin-left object-contain" />
          </Link>
        </div>
        <div className="lg:flex hidden justify-center gap-10 items-center w-full">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className="group  flex justify-center gap-5 items-center  relative"
              key={index}
            >
              <h1 className="text-base font-medium text-black dark:text-white line-clamp-1">
                {item.title}
              </h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[23px] h-[2px] flex items-center w-[50%]  bg-[#000] dark:bg-white  transition-transform duration-300 "
                    : "absolute top-[23px] h-[2px] w-[0%]  bg-[#000] dark:bg-white  transition-all duration-300 group-hover:w-[50%]"
                )}
              ></div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          <div className="px-2">
            <DarkmodeSwitch />
          </div>
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden w-auto items-center justify-end gap-2">
          <div className="px-2">
            <DarkmodeSwitch />
          </div>
          <Link href="/customer" className="whitespace-nowrap shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 rounded-full font-bold text-black bg-gradient-to-r from-[#8DC421] to-[#A3D936] shadow-[0_0_15px_rgba(141,196,33,0.4)] hover:shadow-[0_0_25px_rgba(141,196,33,0.7)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Customer App
                <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                  <svg className="absolute w-4 h-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <svg className="absolute w-4 h-4 translate-x-0 group-hover:translate-x-full transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </span>
            </motion.button>
          </Link>
          <Link href="/provider" className="whitespace-nowrap shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 rounded-full font-bold text-white dark:text-black bg-wnch-blue dark:bg-neutral-100 border border-wnch-blue dark:border-neutral-200 shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(30,69,215,0.5)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-[#1737B0] dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Wrench className="w-5 h-5" />
                Provider App
                <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                  <svg className="absolute w-4 h-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <svg className="absolute w-4 h-4 translate-x-0 group-hover:translate-x-full transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

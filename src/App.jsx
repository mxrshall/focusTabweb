import './App.css'
import background from "./images/background.jpeg";
import img1 from "./images/homepage.png";
import img2 from "./images/details.png";
import { FaDesktop } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { motion } from 'motion/react';

function App() {

  return (
    <>
      <motion.div 
        className='w-full h-[60vh] bg-cover bg-center flex justify-center items-center flex-col' style={{ backgroundImage: `url(${background})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className='w-full h-full bg-black bg-opacity-20 backdrop-blur-md shadow-lg flex justify-center items-center flex-col'>
          <motion.h1 
            className='text-8xl text-white font-bold py-3'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            FocusTab
          </motion.h1>
          <motion.p 
            className='text-lg text-white pb-5'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Tracks time spent on websites.
          </motion.p>
          <a href={`${import.meta.env.BASE_URL}files/FocusTab.rar`} download>
            <motion.button 
              className='text-md bg-white text-[#a5c6cb] px-5 py-2 rounded-lg'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Download
            </motion.button>
          </a>
        </div>
      </motion.div>
      <div className='w-full h-[40vh] flex justify-center items-center flex-col'>
        <motion.div 
          className='w-full flex justify-center items-center'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className='flex justify-center items-center flex-col w-1/6'>
            <FaDesktop size="50" color='#a5c6cb' />
            <p className='text-base mt-2'>Simple interface</p>
          </div>
          <div className='flex justify-center items-center flex-col w-1/6'>
            <MdTimer size="50" color='#a5c6cb' />
            <p className='text-base mt-2'>Time measurement</p>
          </div>
          <div className='flex justify-center items-center flex-col w-1/6'>
            <FaChrome size="50" color='#a5c6cb' />
            <p className='text-base mt-2'>Chrome extension</p>
          </div>
        </motion.div>
        <motion.div 
          className='w-1/2 text-center pt-8'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <p>A Chrome browser extension for detailed tracking of time spent on individual tabs. Collected data can be displayed in clear cards or visualized through graphs. This extension helps users better analyze and organize their time spent browsing websites.</p>
          <a href="mailto:2821619@ucm.sk">
            <p className='text-[#a5c6cb] underline'>If you have any questions or feedback, feel free to email me.</p>
          </a>
        </motion.div>
      </div>
      <motion.div 
        className='w-full h-[80vh] flex justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <img className="w-1/2 h-auto object-contain" src={img1} alt="Homepage" />
        <img className="w-1/2 h-auto object-contain" src={img2} alt="Details" />
      </motion.div>
    </>
  )
}

export default App

import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import background from "./images/background.jpeg";
import img1 from "./images/homepage.png";
import img2 from "./images/details.png";
import chrome from "./images/Chrome.png";
import { FaDesktop } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { motion } from 'motion/react';

function App() {
  const list = [
    { id: 0, image: img1 },
    { id: 1, image: img2 }
  ];

  return (
    <>
      <motion.div 
        className='w-full h-[50vh] bg-cover bg-center flex justify-center items-center flex-col' style={{ backgroundImage: `url(${background})` }}
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
            FocusIQ
          </motion.h1>
          <motion.p 
            className='text-lg text-white pb-5'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Tracks time spent on websites.
          </motion.p>
          <a href={`${import.meta.env.BASE_URL}files/FocusIQ.zip`} download>
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
      <div className='w-full h-[50vh] flex justify-center items-center flex-col'>
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
          className='w-1/2 text-center pt-8 flex flex-col items-center'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <p>A Chrome browser extension for detailed tracking of time spent on individual tabs. Collected data can be displayed in clear cards or visualized through graphs. This extension helps users better analyze and organize their time spent browsing websites.</p>
          <br/>
          <p className='mb-2 font-semibold'>If you have any questions or feedback, feel free to email me.</p>
          <a href="mailto:2821619@ucm.sk">
            <MdMail 
              size="40" 
              color="#a5c6cb" 
              className="transition-transform duration-300 hover:scale-110 cursor-pointer" 
            />
          </a>
        </motion.div>
      </div>
      <motion.div 
        className="w-full flex justify-center items-center flex-col my-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <h1 className="text-xl font-bold mb-4">How to add an extension to Chrome</h1>
        <p>1. Click on <span className="font-bold">Download</span> button</p>
        <p>2. Unzip the file</p>
        <p>
          3. Go to{' '}
          <a className="font-bold">
            chrome://extensions/
          </a>
        </p>
        <p>
          4. Click on <span className="font-bold">"Load unpacked"</span> and select the <span className="font-bold">dist</span> folder
        </p>
        <img
          src={chrome}
          alt="chrome"
          className="w-1/4 mt-5"
        />
      </motion.div>
      <Swiper
        className="w-full"
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
      >
      {list.map((item) => (
        <SwiperSlide key={item.id} className="w-full h-full">
          <div className='w-full h-full flex justify-center items-center'>
            <img
              src={item.image}
              alt={`slide-${item.id}`}
              className="w-1/2 h-full"
            />
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  )
}

export default App

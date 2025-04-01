import './App.css'
import background from "./images/background.jpeg";
import img1 from "./images/homepage.png";
import img2 from "./images/details.png";

function App() {

  return (
    <>
      <div className='w-full h-[60vh] bg-cover bg-center flex justify-center items-center flex-col' style={{ backgroundImage: `url(${background})` }}>
        <div className='w-full h-full bg-black bg-opacity-20 backdrop-blur-md shadow-lg flex justify-center items-center flex-col'>
          <h1 className='text-8xl text-white font-bold py-3'>FocusTab</h1>
          <p className='text-lg text-white'>Tracks time spent on websites.</p>
        </div>
      </div>
      <div className='w-full h-[70vh] flex justify-center items-center gap-10'>
        <img className="w-1/4 h-auto object-contain" src={img1} alt="Homepage" />
        <img className="w-1/4 h-auto object-contain" src={img2} alt="Details" />
      </div>
    </>
  )
}

export default App

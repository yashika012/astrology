import React from 'react';
import horoscope from '../assets/horoscope.png'
import { Link } from 'react-router-dom';
import astrology from '../assets/astrology.mp4'

const Navbar = () => {
  return (
    <div className='w-full min-h-screen video font-libre'>
        <video 
        width="320" 
        height="240" 
        src={astrology} 
        type="video/mp4" 
        className='w-full min-h-screen object-cover absolute top-0 left-0 z-0'
        autoPlay 
        loop 
        muted 
        playsInline
        onError={(e) => console.error("Video error:", e)}
      >
        Your browser does not support the video tag.
      </video>
      <nav className="black p-4 shadow-md absolute top-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold flex items-center">
          <img
            src={horoscope}
            alt="Logo"
            className="h-10 w-10 inline-block mr-2"
            />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-white text-7xl font-semibold">Astrology</h1>
        </div>
      </div>
    </nav>
    <div className='flex items-center justify-center w-full pt-56 absolute top-40'>
   <Link to={"/form"}> <button className='px-7 py-4 text-4xl bg-black text-white rounded-full hover:bg-blue-600 transition'>start</button></Link>
    </div>
    </div>

  );
};

export default Navbar;

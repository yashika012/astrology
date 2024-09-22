import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import horoscopewheel from '../assets/horoscopewheel.mp4'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    day: '',
    month: '',
    year: '',
    country: '',
    city: '',
    placeOfBirth: '',
    hour: '',
    minute: '',
    dayOfBirth: '',
  });

  const countries = ['USA', 'India', 'Canada', 'Australia'];
  const cities = ['New York', 'Mumbai', 'Toronto', 'Sydney', 'Meerut'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
   <div className='w-full min-h-screen'>
     <video 
        width="320" 
        height="240" 
        src={horoscopewheel} 
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
     <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md relative top-0 left-30 opacity-90 font-libre">
      <h2 className="text-2xl font-bold mb-6 text-center">Astrology</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your name"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          {/* Day */}
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Month */}
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(0, i).toLocaleString('en', { month: 'long' })}
              </option>
            ))}
          </select>

          {/* Year */}
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={1920 + i} value={1920 + i}>
                {1920 + i}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">City</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select city</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Place of Birth */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Place of Birth</label>
        <input
          type="text"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter place of birth"
        />
      </div>

      {/* Time of Birth */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Time of Birth</label>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          {/* Hour */}
          <select
            name="hour"
            value={formData.hour}
            onChange={handleChange}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Hour</option>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i}>
                {i.toString().padStart(2, '0')}
              </option>
            ))}
          </select>

          {/* Minute */}
          <select
            name="minute"
            value={formData.minute}
            onChange={handleChange}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Minute</option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={i}>
                {i.toString().padStart(2, '0')}
              </option>
            ))}
          </select>

          {/* Second
          <select
            name="second"
            value={formData.second}
            onChange={handleChange}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Second</option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={i}>
                {i.toString().padStart(2, '0')}
              </option>
            ))}
          </select> */}
        </div>
      </div>

      {/* Day of Birth */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Day of Birth</label>
        <select
          name="dayOfBirth"
          value={formData.dayOfBirth}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select day of birth</option>
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {/* Edit Button */}
      <div className="text-center">
     <Link to={"/image"}>
     <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => console.log('Edited Data:', formData)}
        >
          Edit
        </button>
     </Link>
      </div>
    </form>
   </div>
  );
};

export default Form;

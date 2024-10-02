

import React, { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import horoscopewheel from '../assets/horoscopewheel.mp4';
import { timezones } from '../assets/time';

import { svgContext } from '../App';

const Form = () => {

  const {setSvg} = useContext(svgContext)
  const navigate = useNavigate();

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
    latitude: '',
    longitude: '',
    timezone: '', // Added timezone state
  });

  const countries = ['USA', 'India', 'Canada', 'Australia'];
  const cities = ['New York', 'Mumbai', 'Toronto', 'Sydney', 'Meerut'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Example time zones

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchCoordinates = () => {
    const address = `${formData.city}, ${formData.country}, ${formData.placeOfBirth}`;
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        try {
          const response = JSON.parse(this.responseText);
          if (response && response.results && response.results.length > 0) {
            const location = response.results[0].geometry.location;
            setFormData((prevData) => ({
              ...prevData,
              latitude: location.lat,
              longitude: location.lng,
            }));
            console.log('Latitude:', location.lat, 'Longitude:', location.lng);
          } else {
            console.log('No results found for the given address');
          }
        } catch (error) {
          console.error('Error parsing JSON response:', error);
        }
      }
    });

    xhr.open('GET', `https://map-geocoding.p.rapidapi.com/json?address=${encodeURIComponent(address)}`);
    xhr.setRequestHeader('x-rapidapi-key', 'eaf09d755fmsh13597e24fd41328p1e171cjsnee9ce43697d1');
    xhr.setRequestHeader('x-rapidapi-host', 'map-geocoding.p.rapidapi.com');
    xhr.send(data);
  };

  const fetchHoroscopeImage = () => {
    const api = 'horo_chart_image/:chartId';
    const userId = '633734'; // replace with your user ID
    const apiKey = '6edfa1190495f872fd2d128e6534254d435d2f41'; // replace with your API key
    const language = 'hi'; // set the desired language

    const data = {
      day: formData.day,
      month: formData.month,
      year: formData.year,
      hour: formData.hour,
      min: formData.minute,
      lat: formData.latitude,
      lon: formData.longitude,
      tzone: formData.timezone,
    };

    const auth = "Basic " + btoa(userId + ":" + apiKey);

    fetch(`https://json.astrologyapi.com/v1/${api}`, {
      method: 'POST',
      headers: {
        "Authorization": auth,
        "Content-Type": 'application/json',
        "Accept-Language": language,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(resp => {
        console.log(resp.svg); 
        setSvg(resp.svg)
        navigate('/image')
        // Here you can handle the generated image URL and display it as needed
      })
      .catch(err => {
        console.error('Error fetching horoscope image:', err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCoordinates(); // Fetch coordinates first
    // Call fetchHoroscopeImage after coordinates have been set
    if (formData.latitude && formData.longitude) {
      fetchHoroscopeImage();
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <video
        width="320"
        height="320"
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
      <form
        className="w-[500px] h-[855px] mx-auto bg-white p-8 rounded-lg shadow-md relative top-0 left-30 opacity-90 font-libre"
        onSubmit={handleSubmit}
      >
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
              <option value="">Date</option>
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

        {/* Time Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Time of Birth</label>
          <div className="flex space-x-2">
            <select
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Hour</option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i < 10 ? `0${i}` : i}
                </option>
              ))}
            </select>

            <select
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Minute</option>
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {i < 10 ? `0${i}` : i}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Time Zone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="timezone">
            Time Zone
          </label>
          <select
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your time zone</option>
            {timezones.map((tz, index) => (
              <option key={index} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="country">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="city">
            City
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Place of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="placeOfBirth">
            Place of Birth
          </label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your place of birth"
          />
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
            <option value="">Select day</option>
            {days.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Generate Horoscope Image
        </button>
      </form>
    </div>
  );
};

export default Form;

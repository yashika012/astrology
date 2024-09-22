import React, { useState } from 'react';
import kundli4 from '../assets/kundli4.webp'; // Import your images here
import kundli2 from '../assets/kundli2.webp'; 
import Edit from './Edit'; // Your comment-editing component
import '../index.css';

const ImageWithComments = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [kundli4, kundli2]; // Array of images
  const [comments, setComments] = useState({});
  const [newCommentPosition, setNewCommentPosition] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setNewCommentPosition(null); // Reset position when changing images
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
    setNewCommentPosition(null); // Reset position when changing images
  };

  // Handle adding comments specific to the image
  const handleAddComment = (imageIndex, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [imageIndex]: [...(prevComments[imageIndex] || []), comment],
    }));
    setNewCommentPosition(null); // Reset after adding a comment
  };

  return (
    <div className="relative h-screen">
      <div className="background"></div> {/* Background Image */}
      <div className="flex flex-col items-center">
        <h1 className='text-white text-3xl font-bold'>Edit Kundli</h1>
        {/* Display the image */}
        <img
          src={images[currentImageIndex]}
          alt="kundli"
          onClick={(e) => setNewCommentPosition({ x: e.clientX, y: e.clientY })}
          className="max-w-full min-h-screen mt-5"
        />

        {/* Display and add comments specific to the current image */}
        {images[currentImageIndex] && (
          <Edit
            comments={comments[currentImageIndex] || []}
            setComments={(comment) => handleAddComment(currentImageIndex, comment)}
            newCommentPosition={newCommentPosition}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4">
        <button onClick={prevImage} className="p-2 bg-blue-500 text-white rounded mr-2">
          Previous
        </button>
      </div>
      <div className="absolute top-4 right-4">
        <button onClick={nextImage} className="p-2 bg-blue-500 text-white rounded ml-auto">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageWithComments;

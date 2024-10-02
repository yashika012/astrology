import React, { useContext, useState } from 'react';
import Edit from './Edit'; // Your comment-editing component
import '../index.css';

import { svgContext } from '../App';

const ImageWithComments = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comments, setComments] = useState({});
  const [newCommentPosition, setNewCommentPosition] = useState(null);
  const {svg} = useContext(svgContext)

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
        <h1 className='text-3xl font-bold'>Edit Kundli</h1>
        {/* Display the image */}
        <div
          alt="kundli"
          onClick={(e) => setNewCommentPosition({ x: e.clientX, y: e.clientY })}
          className="max-w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        >
        </div>
      </div>

      {/* Navigation Buttons */}
    </div>
  );
};

export default ImageWithComments;

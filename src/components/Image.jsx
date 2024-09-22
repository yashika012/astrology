import React, { useRef } from 'react';

const Image = ({ imageUrl, setNewCommentPosition }) => {
  const imgRef = useRef(null);

  const handleImageClick = (e) => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setNewCommentPosition({ x, y });
    }
  };

  return (
    <div className='background'>
    <div className="relative flex justify-center items-center ">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Random"
          ref={imgRef}
          className="object-contain w-full min-h-screen" // Adjust to fill while maintaining aspect ratio
        />
      )}
    </div>
    </div>
  );
};

export default Image;

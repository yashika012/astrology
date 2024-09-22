import React, { useState } from 'react';

const Edit = ({ comments, setComments, newCommentPosition }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment && newCommentPosition) {
      setComments({ text: newComment, position: newCommentPosition });
      setNewComment(''); // Clear the input after submission
    }
  };

  return (
    <div>
      {newCommentPosition && (
        <div
          style={{
            position: 'absolute',
            left: newCommentPosition.x,
            top: newCommentPosition.y,
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '5px',
            zIndex: 1000,
          }}
        >
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button className='bg-black text-white font-bold  px-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-200 ease-in-out' onClick={handleAddComment}>Edit Kundli</button>
        </div>
      )}

      {/* Render comments */}
      {comments.map((comment, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: comment.position?.x || 0,
            top: comment.position?.y || 0,
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '5px',
          }}
        >
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export default Edit;

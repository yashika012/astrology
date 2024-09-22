import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Form from './components/Form';
import ImageWithComments from './components/ImageWithComments'; // This component will handle image + comments

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />, // Home or navigation component
  },
  {
    path: "/form",
    element: <Form />, // Form component for another route
  },
  {
    path: "/image",
    element: <ImageWithComments /> // Image and comments logic is handled here
  },
]);

const App = () => {
  return (
    <>
     
      <RouterProvider router={router} />
    
    </>
  );
};

export default App;

import React, { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Form from './components/Form';
import ImageWithComments from './components/ImageWithComments'; // This component will handle image + comments

export const svgContext = createContext();

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
  const [svg, setSvg] = useState(null);
  return (
    <svgContext.Provider value={{ svg, setSvg }}>
     
      <RouterProvider router={router} />
    
    </svgContext.Provider>
  );
};

export default App;

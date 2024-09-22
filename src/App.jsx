import Editor from "./components/Editor";
import Form from "./components/Form";
import {createBrowserRouter , Link, RouterProvider} from 'react-router-dom';
import Nav from "./components/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
  },
  {
    path: "/form",
    element: <Form/>,
  },
  {
    path:"editor",
    element:<Editor/>
  }
]);

function App() {
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App



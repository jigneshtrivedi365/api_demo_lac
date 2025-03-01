import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Form } from './component/Form'
import { Studentlist } from './component/Studentlist';
import { AppLayout } from './component/Layout/AppLayout';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element:<Form />
        },
        {
          path: "/student-list",
          element: <Studentlist />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

}

export default App

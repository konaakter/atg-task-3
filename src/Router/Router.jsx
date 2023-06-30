import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import UserDetails from "../Pages/Home/Home/UserDetails";
//import Errorelement from "../Pages/Home/Home/Errorelement/Errorelement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/userdetails/:id",
            element: <UserDetails></UserDetails>,
            loader: ({params}) => fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`)

          },
          
      ],
    },
  ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Instructor/Instructors";
import Classes from "../pages/Home/Classes/Classes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/instructors',
          element:<Instructors></Instructors>
        },
        {
         path:'/classes',
         element:<Classes></Classes> 
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
        
      ]
    },
  ]);


  export default router;
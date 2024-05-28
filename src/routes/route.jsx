import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";
import MainLayout from "../layout/MainLayout";
import Product from "../page/product/Product";
import Login from "../page/AuthPage/login/Login";
import Register from "../page/AuthPage/register/register";
import DashBoradLayout from "../layout/DashBoradLayout";
import DashboardHome from "../page/Dashboard/dashboardHomePage/DashboardHome";
import AddProduct from "../components/dashboard/AddProduct";
import MyProduct from "../components/dashboard/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path:'dashboard',
    element: <DashBoradLayout/>,
    children:[
      {
        path:'/dashboard',
      element:<DashboardHome/>
      },
      {
        path:'/dashboard/add-product',
      element:<AddProduct/>
      },
      {
        path:'/dashboard/my-product',
      element:<MyProduct/>
      },
    ]
  }
]);
export default router;

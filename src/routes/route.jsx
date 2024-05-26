import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";
import MainLayout from "../layout/MainLayout";
import Product from "../page/product/Product";

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
    ],
  },
]);
export default router;

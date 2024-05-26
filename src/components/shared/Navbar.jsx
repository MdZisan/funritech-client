import { useState } from "react";
import { RiArmchairFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
   
    {
      title: "Product",
      path: "/product",
    },
    {
        title: "About",
        path: "/about",
      },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const [active, setActive] = useState(false);
 const {pathname} = useLocation();
console.log(pathname)
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to={'/'} className="btn text-indigo-600 font-bold btn-ghost text-2xl"> <RiArmchairFill /> FurniTech</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
                <li key={index}>
               
                  <Link to={item.path}  className={`rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600   ${pathname===item.path ? 'bg-indigo-600 text-white':'text-indigo-600'} `}>
<span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span className="relative transition duration-300 group-hover:text-white ease ">  {item.title}</span>
</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="navbar-end">
        <p href="#_" className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span className="relative"><Link to={'/'}>Login</Link></span>
</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

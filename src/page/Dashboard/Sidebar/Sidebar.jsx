import { FaCartShopping, FaList } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const Sidebar = () => {

    const navItems = [
        {icon: <IoMdHome />,
          title: "Home",
          path: "/",
        },
        {icon: <FaCartShopping />,
          title: "Product",
          path: "/product",
        },
        {icon: <MdOutlineAddBox />,
            title: "Add Product",
            path: "/dashboard/add-product",
          },
        {icon: <FaList />,
            title: "My Product",
            path: "/dashboard/my-product",
            },]


         return (
             <>
             <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 min-h-full bg-[#b6b7f17c] text-base-content">
      {/* Sidebar content here */}
      
        {navItems.map((item, index) => (
                    <Link to={item.path} key={index} className="flex flex-row items-center justify-start text-xl text-white bg-indigo-400 hover:bg-indigo-500 rounded-xl my-2 p-2 w-[70%] hover:w-[75%] transition-all mx-auto gap-x-2">
                   <h1 className="">{item.icon}</h1> <li className="">{item.title}</li>
                    </Link>
                ))}
    </ul>
  
  </div>
</div> 
             </>
          );
};

export default Sidebar;
import { RiArmchairFill } from "react-icons/ri";

const Footer = () => {
         return (
             <>
              
        <footer className="flex flex-col text-black">
            <div className="flex flex-col justify-around gap-5 py-8 md:flex-row md:gap-0 items-center">
                <aside className="flex items-center justify-center gap-3 text-xl">
                 <RiArmchairFill className="text-indigo-600 w-[50px] h-[50px]" />
                    <p className="font-bold">FurniTech</p>
                </aside>
                <nav className="text-lg">
                    <ul className="flex h-full items-center justify-center gap-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className=" py-5 text-center text-sm">
                <p>&copy; 2024 FurniTech. All Rights Reserved.</p>
            </aside>
        </footer>
   
             </>
          );
};

export default Footer;
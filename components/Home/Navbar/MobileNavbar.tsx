import { NavLink } from "@/constant/constants";
import Link from "next/link";
import { CgClose } from "react-icons/cg";


const MobileNavbar = ({ showNav, closeNav }:any) => {
  
  
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="lg:hidden"> 
      
      <div 
        onClick={closeNav}
        className={`fixed ${showNav ? "block" : "hidden"} inset-0 transform transition-all duration-500 z-[100] bg-black opacity-70 w-full h-svh`}
      ></div>
      
      
      <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]`}>
        
        {NavLink.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        
        <CgClose 
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
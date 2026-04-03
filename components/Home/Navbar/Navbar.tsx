import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-blue-900">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
            <GrTechnology className="w-6 h-5 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            DevTech
          </h1>
        </div>
        {/* NavLink */}
        
      </div>
    </div>
  );
};

export default Navbar;

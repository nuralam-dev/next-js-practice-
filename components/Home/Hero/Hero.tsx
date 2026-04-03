const Hero = () => {
  return (
    <div className="relative bg-blue-950 w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div>
         
          <p className="text-sm sm:text-base md:text-xl font-bold text-white">
            The Top Software Development Company
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl mt-6 mb-6 font-bold text-white leading-[2.5rem] md:leading-[4rem]">
            Providing software solutions for your any{" "}
            <span className="text-yellow-300">business</span>
          </h1>
        </div>

        {/* Image Content */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;

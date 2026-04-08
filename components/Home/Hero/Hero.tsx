import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-blue-950 w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div data-aos="fade-up">
          <p className="text-sm sm:text-base md:text-xl font-bold text-white">
            The Top Software Development Company
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl mt-6 mb-6 font-bold text-white leading-[2.5rem] md:leading-[4rem]">
            Providing software solutions for your any{" "}
            <span className="text-yellow-300">business</span>
          </h1>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            accusantium voluptatibus nihil sunt iste vitae.
          </p>
          {/* button */}
          <a
            href="#"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            {/* Background animated span */}
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            {/* Button text span */}
            <span className="relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Discover More
            </span>
          </a>
        </div>

        {/* Image Content */}
        <div data-aos="fade-down" data-aos-delay="150" className="mx-auto  ">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={900}
            height={900}
            priority 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

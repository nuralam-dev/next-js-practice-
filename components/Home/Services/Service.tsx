import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              What we provide
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Provide High Quality Software's Service For All Industry
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
            >
              All Services
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard
              image="/images/s1.png"
              title="Custom Softwares Development"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard
              image="/images/s2.png"
              title="Website Design & Developments"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard
              image="/images/s3.png"
              title="Cloud Computing & Hosting Service"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard image="/images/s4.png" title="Ai & Machine learning" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <ServiceCard
              image="/images/s5.png"
              title="Android & iOS App Development"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <ServiceCard
              image="/images/s6.png"
              title="3D Graphic & Vector Designing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

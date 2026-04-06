import SoftwareCard from "./SoftwareCard";
const Software = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="text-center">
        <h2 className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500">
          Softwares
        </h2>
        <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
          Driving Change with Innovative <br /> Successful Softwares
        </h1>
      </div>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <SoftwareCard icon="/images/i1.png" title="Best Marketing Software" />
        <SoftwareCard icon="/images/i2.png" title="Custom CRM Solutions" />
        <SoftwareCard icon="/images/i3.png" title="Data Analytics Suite" />
      </div>
    </section>
  );
};

export default Software;

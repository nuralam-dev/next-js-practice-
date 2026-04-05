import Hero from "./Hero/Hero";
import Service from "./Services/Service";

const home = () => {
  return <div className="overflow-hidden">
   <Hero/>
   <Service/>
  </div>;
};

export default home;

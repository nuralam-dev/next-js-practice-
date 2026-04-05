import About from "./About/About";
import Hero from "./Hero/Hero";
import Service from "./Services/Service";

const home = () => {
  return <div className="overflow-hidden">
   <Hero/>
   <Service/>
   <About/>
  </div>;
};

export default home;

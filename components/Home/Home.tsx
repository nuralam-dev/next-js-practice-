import About from "./About/About";
import Hero from "./Hero/Hero";
import Service from "./Services/Service";
import Software from "./Software/Software";

import WhyChoose from "./WhyChoose/WhyChoose";

const home = () => {
  return <div className="overflow-hidden">
   <Hero/>
   <Service/>
   <About/>
   <WhyChoose/>
   <Software/>
   
  </div>;
};

export default home;

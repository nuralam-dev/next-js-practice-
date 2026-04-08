import About from "./About/About";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Review from "./Review/Review";
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
   <Project/>
   <Review/>
   <Blog/>
   
  </div>;
};

export default home;

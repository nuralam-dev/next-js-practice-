"use client";

import { useEffect } from "react";

// Components
import About from "./About/About";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Review from "./Review/Review";
import Service from "./Services/Service";
import Software from "./Software/Software";
import WhyChoose from "./WhyChoose/WhyChoose";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
      <About />
      <WhyChoose />
      <Software />
      <Project />
      <Review />
      <Blog />
    </div>
  );
};

export default Home;

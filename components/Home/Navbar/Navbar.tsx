"use client";

import { NavLink } from "@/constant/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />

      <div
        className={`fixed w-full transition-all duration-300 h-[12vh] z-[1000] flex items-center ${
          navBg ? "bg-blue-900 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
          {/* logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <GrTechnology className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              DevTech
            </h1>
          </div>

          {/* Desktop NavLink */}
          <div className="hidden lg:flex items-center space-x-10">
            {NavLink.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="text-white text-lg hover:text-pink-300 font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons & Burger */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
            >
              <span className="relative">Create Account</span>
            </a>

            <HiBars3BottomRight
              onClick={openNavHandler}
              className="w-8 h-8 text-white lg:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

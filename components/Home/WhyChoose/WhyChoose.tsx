import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            Why Choose Us?
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]">
            Innovations Excellence Building Digital Future Together
          </h1>
          {/* line */}
          <div className="mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-700"></div>
          {/* List type feature */}
          {/* 1st item */}
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
            <div className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center">
              <FaRegFileCode className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Free Integration</h1>
              <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
                Competently leverage existing top-line technology maximize cost
                effective service done
              </p>
            </div>
          </div>
          {/* 2nd item */}
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
            <div className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center">
              <GrResources className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Premium Resources</h1>
              <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
                Competently leverage existing top-line technology maximize cost
                effective service done
              </p>
            </div>
          </div>
          {/* 3rd item */}
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
            <div className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center">
              <BiSupport className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Unlimited Support</h1>
              <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
                Competently leverage existing top-line technology maximize cost
                effective service done
              </p>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div>
          <Image
            src="/images/wc.png"
            alt="Why Choose"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

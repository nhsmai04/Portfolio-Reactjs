import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Card = ({ time, title, company, icon }) => {
  return (
    <div className="relative  w-full   group px-3">
      {/* Hiệu ứng nền mờ khi hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Nội dung Card */}
      <div className="w-full  relative flex flex-col gap-6 border border-blue-400 p-8 rounded-lg bg-gray-100 dark:bg-[#18102e] transition-opacity group-hover:opacity-90 min-h-[200px]">
        <h3 className="text-2xl text-center text-pink-600">{time}</h3>

        <div className="flex items-center gap-8">
          {/* Icon */}
          <div className="w-[15%] flex justify-center items-center">
            <FontAwesomeIcon
              icon={icon}
              className="text-green-500 text-6xl md:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-600"
            />
          </div>

          {/* Text */}
          <div className="w-[85%] flex flex-col gap-3 flex-1">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {title}
            </h3>
            <p className="text-gray-900 dark:text-white text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

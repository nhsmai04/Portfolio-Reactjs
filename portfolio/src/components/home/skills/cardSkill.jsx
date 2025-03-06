import React from 'react';

const CardSkill = ({ title, logo }) => {
return (
    <div className="relative flex flex-col w-28 h-28 mr-5 items-center justify-center border-2 dark:border-[#242c58] dark:text-gray-200 dark:hover:border-pink-700 dark:hover:text-pink-700  border-gray-300 bg-gray-200 dark:bg-[#11152c] p-4 rounded-md
                                    transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:bg-white hover:border-blue-700 hover:text-blue-700 
                                    hover:z-50  "
    >
        <div className="flex flex-col justify-center items-center">
            <img src={logo} alt={title} className="w-14 h-12 mb-2 object-contain" />
            <h3 className="text-center font-semibold text-[20px]">{title}</h3>
        </div>
    </div>
);
};

export default CardSkill;

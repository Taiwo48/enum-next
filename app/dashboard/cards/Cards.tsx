"use client";

import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  icon: string; // or StaticImageData if using next/image
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="w-full sm:max-w-[249px] h-[200px] bg-white border border-gray-300 rounded-[8px] opacity-100 relative">
      {/* Header */}
      <div className="w-full h-[44px] rounded-t-[8px] flex items-center justify-between px-[20px] pt-[12px] pb-[8px] border-b border-gray-300">
        <h2 className="text-sm font-medium">{title}</h2>
      </div>

      {/* Value */}
      <div className="p-4">
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>

      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="absolute bottom-0 right-0 w-[103px] h-[103px] opacity-100"
      />
    </div>
  );
};

export default Card;

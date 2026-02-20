"use client";

import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

// Public logo path
const EnumLogo = "/Enum_Logo_Blue-removebg-preview 2 (1).png";

// TypeScript props
interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] border-b border-gray-200 bg-white flex items-center px-6 z-50">
      
      {/* Hamburger menu for mobile */}
      <button onClick={onMenuClick} className="lg:hidden mr-3">
        <Menu size={24} />
      </button>

      {/* Logo container */}
      <div className="relative h-[31px] w-[120px] pl-2">
        <Image
          src={EnumLogo}
          alt="Enum Logo"
          fill // automatically fills parent div
          style={{ objectFit: "contain" }}
        />
      </div>
    </header>
  );
};

export default Header;
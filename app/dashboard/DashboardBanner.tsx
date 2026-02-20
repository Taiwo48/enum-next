"use client"; // Needed for client-side interactivity

import React from "react";
import Image from "next/image";

// Public image path
const SettingsImage = "/settings-01.png"; // stays as public path

const DashboardBanner: React.FC = () => {
  return (
    <div
      className="
        relative
        w-full
        h-[168px]
        bg-blue-600
        rounded-[10px]
        px-8
        py-6
        text-white
        overflow-hidden
        flex
        items-center
        justify-between
      "
    >
      {/* Text content */}
      <div className="max-w-[700px]">
        <h2 className="text-xl font-semibold">
          Your learning hub is almost ready!
        </h2>

        <p className="mt-2 text-sm text-blue-100">
          To give your learners and partner institutions the best experience,
          we recommend setting up your hub preferences today.
        </p>

        <button className="mt-4 bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-50">
          Configure hub
        </button>
      </div>

      {/* Illustration */}
      <Image
        src={SettingsImage}
        alt="Settings illustration"
        width={120}
        height={120}
        className="absolute bottom-0 right-0 object-contain pointer-events-none"
      />
    </div>
  );
};

export default DashboardBanner;
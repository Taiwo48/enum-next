"use client";

import React from "react";

// TypeScript interface for institute
interface Institute {
  name: string;
  location: string;
  dateJoined: string;
  status: "Active" | "Suspended" | "Pending";
  pathways: number;
  learners: number;
  logo: string; // path from public folder
}

// Data
const institutes: Institute[] = [
  {
    name: "Productive",
    location: "Lagos, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Active",
    pathways: 34,
    learners: 34,
    logo: "/PD-Logo_Stack-removebg-preview%201%20(2).png",
  },
  {
    name: "Semicolon Africa",
    location: "Nasarawa, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Suspended",
    pathways: 5,
    learners: 5,
    logo: "/Mask%20group%20(1).png",
  },
  {
    name: "Productive",
    location: "Maiduguri, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Pending",
    pathways: 3,
    learners: 3,
    logo: "/PD-Logo_Stack-removebg-preview%201%20(2).png",
  },
];

// Status styles
const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function RecentPartnerInstitutes() {
  return (
    <div className="bg-white w-full lg:max-w-[778px] rounded-[12px] p-4 sm:p-6">
      <h2 className="text-gray-900 mb-4 text-base sm:text-lg font-medium">
        Recent partner institute
      </h2>

      {/* Tabs & View all */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          {["All", "Active", "Suspended"].map((tab) => (
            <button
              key={tab}
              className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="text-sm text-blue-600 hover:underline">View all</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-3 sm:px-4 font-medium text-gray-700">Institutes</th>
              <th className="py-3 px-3 sm:px-4 font-medium text-gray-600">Date joined</th>
              <th className="py-3 px-3 sm:px-4 font-medium text-gray-600">Status</th>
              <th className="py-3 px-3 sm:px-4 font-medium text-gray-600">No of pathways</th>
              <th className="py-3 px-3 sm:px-4 font-medium text-gray-600">No of learners</th>
            </tr>
          </thead>

          <tbody>
            {institutes.map((inst, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {/* Logo + Name */}
                <td className="py-2 sm:py-3 px-2 sm:px-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 overflow-hidden">
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{inst.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{inst.location}</p>
                  </div>
                </td>

                {/* Date joined */}
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{inst.dateJoined}</td>

                {/* Status */}
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${statusStyles[inst.status]}`}>
                    {inst.status}
                  </span>
                </td>

                {/* Pathways */}
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{inst.pathways}</td>

                {/* Learners */}
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{inst.learners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
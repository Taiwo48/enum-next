"use client";

import React from "react";
import Image from "next/image";

// TypeScript interface for instructor
interface Instructor {
  name: string;
  location: string;
  dateJoined: string;
  status: "Active" | "Suspended" | "Pending";
  logo: string; // path from public folder
}

// Instructor data
const instructors: Instructor[] = [
  {
    name: "Adewale Micheal",
    location: "Lagos, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Active",
    logo: "/Avatar%20(1).png", // encode spaces and parentheses
  },
  {
    name: "Ashley Immanuel",
    location: "Nasarawa, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Suspended",
    logo: "/Ashley-Immanuel%201%20(1).png",
  },
  {
    name: "Ashley Immanuel",
    location: "Maiduguri, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Active",
    logo: "/Ashley-Immanuel%201%20(1).png",
  },
];

// Status styles mapping
const statusStyles: Record<Instructor["status"], string> = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function Instructors() {
  return (
    <div className="bg-white w-[778px] rounded-[12px] p-6">
      <h2 className="text-gray-900 mb-4 text-[16px] font-medium">
        Instructors
      </h2>

      {/* Tabs */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          {["All", "Active", "Suspended"].map((tab) => (
            <button
              key={tab}
              className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="text-sm text-blue-600 hover:underline">
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-[#EAECF0]">
              <th className="py-3 px-4 font-medium text-gray-600">Name</th>
              <th className="py-3 px-4 font-medium text-gray-600">
                Date joined
              </th>
              <th className="py-3 px-4 font-medium text-gray-600">Status</th>
              <th className="py-3 px-4 font-medium text-gray-600">Email</th>
              <th className="py-3 px-4 font-medium text-gray-600">
                Active courses
              </th>
            </tr>
          </thead>

          <tbody>
            {instructors.map((inst, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {/* Name + Logo */}
                <td className="py-3 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative">
                    <Image
                      src={inst.logo}
                      alt={inst.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{inst.name}</p>
                    <p className="text-xs text-gray-500">{inst.location}</p>
                  </div>
                </td>

                {/* Date Joined */}
                <td className="py-3 px-4 text-gray-700">{inst.dateJoined}</td>

                {/* Status */}
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[inst.status]}`}
                  >
                    {inst.status}
                  </span>
                </td>

                {/* Email */}
                <td className="py-3 px-4 text-gray-700">Adewale@gmail.com</td>

                {/* Active courses */}
                <td className="py-3 px-4 text-gray-700">24</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
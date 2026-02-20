"use client";

import React from "react";
import Image from "next/image";

// Public folder icons (spaces and parentheses encoded)
const SemicolonIcon = "/Mask%20group%20(1).png";
const ProductdiveIcon = "/PD-Logo_Stack-removebg-preview%201%20(2).png";

interface Notification {
  id: number;
  company: string;
  action: string;
  date: string;
  icon: string; // path from public folder
}

const notifications: Notification[] = [
  { id: 1, company: "Semicolon Africa", action: "Created a cohort", date: "Jan 12, 2023", icon: SemicolonIcon },
  { id: 2, company: "Productdive", action: "Sent on 12 May 2025", date: "Feb 12, 2023", icon: ProductdiveIcon },
  { id: 3, company: "Semicolon Africa", action: "Created a program", date: "Mar 12, 2023", icon: SemicolonIcon },
  { id: 4, company: "Semicolon Africa", action: "Created a course", date: "May 12, 2023", icon: SemicolonIcon },
];

const NotificationCard: React.FC = () => {
  return (
    <div className="w-[343px] max-w-[400px] h-[384px] border border-gray-300 rounded-[8px] bg-white p-4 ml-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent notifications</h2>
        <button className="text-sm text-blue-600 hover:underline">View all</button>
      </div>

      <div className="flex flex-col gap-4 max-h-[320px] overflow-y-auto">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full h-[72px] px-[24px] py-[16px] border-b border-gray-200"
          >
            {/* Icon */}
            <div className="flex-shrink-0 relative w-8 h-8">
              <Image
                src={item.icon}
                alt={item.company}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Company & Action */}
            <div className="flex flex-col flex-1 px-3">
              <span className="text-sm font-medium text-gray-800">{item.company}</span>
              <span className="text-xs text-gray-500">{item.action}</span>
            </div>

            {/* Date */}
            <div className="flex-shrink-0">
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;
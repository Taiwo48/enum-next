"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


interface ChartPoint {
  month: string;
  enrollment: number;
}

const data: ChartPoint[] = [
  { month: "Jan", enrollment: 60 },
  { month: "Feb", enrollment: 62 },
  { month: "Mar", enrollment: 63 },
  { month: "Apr", enrollment: 65 },
  { month: "May", enrollment: 68 },
  { month: "Jun", enrollment: 70 },
  { month: "Jul", enrollment: 66 },
  { month: "Aug", enrollment: 72 },
  { month: "Sep", enrollment: 75 },
  { month: "Oct", enrollment: 73 },
  { month: "Nov", enrollment: 76 },
  { month: "Dec", enrollment: 81 },
];

export default function CoursePerformance() {
  const [activeTab, setActiveTab] = useState<string>("Enrollment");
  const tabs: string[] = ["Enrollment", "In progress", "Completion", "Complaints"];

  return (
    <div className="bg-white border border-gray-300 rounded-[12px] h-[650px] w-full max-w-[778px]">
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
          <h1 className="text-xl font-semibold text-gray-800">
            Course performance
          </h1>
          <button className="text-blue-600 text-sm hover:underline">
            Customize
          </button>
        </div>

        <h2 className="text-gray-600 text-base mb-4">
          Introduction to UX Design
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-b pb-2">
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border rounded-md">
              This year
            </button>
            <button className="px-3 py-1 text-sm border rounded-md bg-gray-100 text-gray-500">
              This month
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[600px] sm:h-[320px] md:h-[360px] px-4 sm:px-6 pb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 10, right: 20, bottom: 30 }}>
            <defs>
              <linearGradient
                id="enrollmentGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              label={{
                value: "Month",
                position: "insideBottom",
                offset: -10,
                fill: "#6b7280",
                fontSize: 12,
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              label={{
                value: "Enrollment",
                angle: -90,
                position: "insideLeft",
                fill: "#6b7280",
                fontSize: 12,
              }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="enrollment"
              stroke="#2563eb"
              fill="url(#enrollmentGradient)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

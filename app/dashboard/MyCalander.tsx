"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import calendarimage from "@/public/calendar-check-01.png"; // ✅ correct import

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  return (
    <div className="w-[343px] max-w-[400px] bg-white rounded-[8px] p-4 ml-4 shadow">
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="mx-auto border-none shadow-none react-calendar-custom"
      />

      <div className="flex justify-center mt-4 relative w-full h-[80px]">
        <Image
          src={calendarimage}
          alt="calendar"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <p className="mt-4 text-center text-gray-600">
        There are no activities for today
      </p>

      <style jsx>{`
        .react-calendar-custom {
          border: none !important;
          box-shadow: none !important;
        }
        .react-calendar-custom__tile {
          border: none !important;
        }
      `}</style>
    </div>
  );
};

export default MyCalendar;

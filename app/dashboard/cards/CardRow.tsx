"use client";

import React from "react";
import Card from "./Cards";

// Correct way to reference images in /public
const HumanIcon = "/users-01.png";
const Book = "/book-open-01.png";
const Building = "/building-08 (1).png";

const CardRow = () => {
  return (
    <div
      className="
        w-full
        max-w-[779px]
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
      "
    >
      <Card title="Total learners" value="2,114" icon={HumanIcon} />
      <Card title="Partner institute" value="2,114" icon={Building} />
      <Card title="Live courses" value="2,114" icon={Book} />
    </div>
  );
};

export default CardRow;

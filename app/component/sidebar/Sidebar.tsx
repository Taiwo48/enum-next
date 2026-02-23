"use client";

import { useState } from "react";
import Image from "next/image";

import LetMeetYou from "../letmeetyou/letmeetyou";
import AddCompany from "../addcompany/AddCompany";
import InviteYourTeam from "../inviteyourteam/InviteYourTeam";

interface Step {
  id: number;
  title: string;
  description: string;
  component: React.ReactNode;
}

const Sidebar: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const steps: Step[] =  [
  { id: 1, title: "Let’s meet you", description: "With your name and work email", component: <LetMeetYou /> },
  {
    id: 2,
    title: "Add company",
    description: "Create your space on Enum",
    component: <AddCompany setActiveStep={setActiveStep} />,
  },
  {
    id: 3,
    title: "Invite your team",
    description: "Start collaborating with your team",
    component: <InviteYourTeam setActiveStep={setActiveStep} />, // ✅ FIXED
  },
];

  const activeComponent = steps.find(step => step.id === activeStep)?.component;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Mobile Toggle Bar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-blue-600 text-white">
        <Image 
          src="/Enum_Logo_White 1.png" 
          alt="Logo" 
          width={80} 
          height={20} 
          className="object-contain" 
        />
        <button onClick={() => setIsOpen(true)}>☰</button>
      </div>

      {/* Sidebar */}
      <div className={`${isOpen ? "block" : "hidden"} md:block fixed md:static top-0 left-0 z-40`}>
        <div className="w-full md:w-64 bg-blue-600 text-white p-4 sm:p-6 md:p-6 flex flex-col h-screen sticky top-0">
          
          {/* Mobile Close Button */}
          <button className="md:hidden text-white text-2xl mb-4" onClick={() => setIsOpen(false)}>✕</button>

          {/* Logo */}
          <div className="mb-8 md:mb-12 flex justify-center md:justify-start">
            <Image 
              src="/Enum_Logo_White 1.png" 
              alt="Logo" 
              width={80} 
              height={20} 
              className="object-contain" 
            />
          </div>

          {/* Steps */}
          <div className="space-y-4 overflow-y-auto flex-1">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  className="flex gap-4 cursor-pointer items-start"
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsOpen(false); // close sidebar on mobile
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isActive ? "bg-white border-white" : "border-white bg-blue-600"}`}>
                      {isActive && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                    </div>
                    {index !== steps.length - 1 && <div className="w-px h-12 bg-white mt-1"></div>}
                  </div>

                  <div className="flex-1">
                    <p className={`font-semibold text-sm sm:text-base ${isActive ? "text-white" : "text-white/90"}`}>{step.title}</p>
                    <p className="text-xs sm:text-sm text-white/80">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-50 flex flex-col">
        <div className="flex-1 overflow-y-auto">{activeComponent}</div>
      </div>
    </div>
  );
};

export default Sidebar;
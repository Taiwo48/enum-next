"use client";

import React, { useState, ChangeEvent } from "react";
import DetailsStep from "./Details";
import ShortDescriptionStep from "./ShortDescription";
import UsagePreferenceStep from "./UsagePreference";
import LogoStep from "./Logo";
import LetMeetYou from "../letmeetyou/letmeetyou";
import { IoMdArrowBack } from "react-icons/io";

/* -------------------- TYPES -------------------- */
interface FormData {
  companyName: string;
  industry: string;
  website: string;
  siteName: string;
  companySize: string;
  description: string;
  usagePreferences: string[];
  logo: string | null; // uploaded logo URL
  logoName: string;
}

/* -------------------- COMPONENT -------------------- */
const AddCompany: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    companyName: "",
    industry: "",
    website: "",
    siteName: "",
    companySize: "",
    description: "",
    usagePreferences: [],
    logo: null,
    logoName: "",
  });

  const [activeStep, setActiveStep] = useState<string>("Details");
  const [showLetMeetYou, setShowLetMeetYou] = useState<boolean>(false);

  /* -------------------- HANDLERS -------------------- */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const goToNextStep = () => {
    const steps = ["Details", "Short description", "Usage preference", "Logo"];
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const togglePreference = (option: string) => {
    setForm((prev) => {
      const current = prev.usagePreferences || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, usagePreferences: updated };
    });
  };

  /* -------------------- STEP CONTENT -------------------- */
  const renderStepContent = () => {
    switch (activeStep) {
      case "Details":
        return (
          <DetailsStep
            form={form}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );
      case "Short description":
        return (
          <ShortDescriptionStep
            form={form}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );
      case "Usage preference":
        return (
          <UsagePreferenceStep
            form={form}
            togglePreference={togglePreference}
            goToNextStep={goToNextStep}
          />
        );
      case "Logo":
        return <LogoStep form={form} setForm={setForm} />;
      default:
        return null;
    }
  };

  /* -------------------- RENDER -------------------- */
  if (showLetMeetYou) {
    return <LetMeetYou />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">
      <main className="w-full flex-1 flex justify-center items-center">
        <div
          className="bg-[#F8FAFC] rounded-xl shadow-sm"
          style={{ width: "884px", height: "634px" }}
        >
          <div className="w-full h-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2">
            {/* LEFT NAV */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 bg-gray-50">
              <button
                type="button"
                onClick={() => setShowLetMeetYou(true)}
                className="flex items-center text-black text-sm font-medium mb-4 hover:text-gray-700"
              >
                <IoMdArrowBack className="text-xl mr-2" />
                Back
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">Add</h2>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">company</h2>
              <p className="text-gray-600 mb-6">
                Nice work, David. Just one more step — now, let’s complete your
                setup with your organization’s info.
              </p>

              <ul className="space-y-2 text-gray-700">
                {["Details", "Short description", "Usage preference", "Logo"].map(
                  (step) => (
                    <li
                      key={step}
                      onClick={() => setActiveStep(step)}
                      className={`cursor-pointer px-3 py-1 border-l-4 ${
                        activeStep === step
                          ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                          : "border-transparent hover:text-blue-500"
                      }`}
                    >
                      {step}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-6 sm:p-8 h-[600px] overflow-y-auto">
              {renderStepContent()}
            </div>
          </div>
        </div>
      </main>

      {/* STEP INDICATOR */}
      <div className="flex justify-center gap-4 py-6">
        <div className="h-1 w-20 rounded-full bg-gray-300"></div>
        <div className="h-1 w-20 rounded-full bg-blue-600"></div>
        <div className="h-1 w-20 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default AddCompany;

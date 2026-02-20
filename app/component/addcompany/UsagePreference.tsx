"use client";

import React from "react";

/* -------------------- TYPES -------------------- */
interface FormData {
  usagePreferences: string[];
}

interface UsagePreferenceStepProps {
  form: FormData;
  togglePreference: (option: string) => void;
  goToNextStep: () => void;
}

/* -------------------- COMPONENT -------------------- */
const UsagePreferenceStep: React.FC<UsagePreferenceStepProps> = ({
  form,
  togglePreference,
  goToNextStep,
}) => {
  const usageOptions: string[] = [
    "To train employees",
    "To train partners",
    "To sell assessments",
    "To train customers",
    "To hire talent",
    "To sell question banks",
    "To manage talent",
    "To manage hub",
    "To host live classes",
    "To create events",
    "For credentialing",
    "To create courses",
    "To manage programs",
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Usage preference</h3>

      <div className="h-80 overflow-y-scroll flex flex-wrap gap-3">
        {usageOptions.map((option) => {
          const isSelected = form.usagePreferences.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => togglePreference(option)}
              className={`px-4 py-2 rounded-full text-sm ${
                isSelected
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={goToNextStep}
          className="text-blue-600 font-semibold hover:underline"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsagePreferenceStep;

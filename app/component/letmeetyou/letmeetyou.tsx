"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import EmailVerification from "./EmailVerification";
import BasicInfo from "./BasicInfo";

// TypeScript interface for form data
interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  password: string;
  confirmPassword: string;
}

const LetMeetYou: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Generic handler for input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for step 1
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setStep(2);
  };

  // If on step 2, render EmailVerification directly
  if (step === 2) {
    return <EmailVerification formData={formData} setStep={setStep} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">
      {/* Top login link */}
      <div className="w-full flex justify-end text-sm p-4 sm:p-6 md:p-10">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Main card */}
      <main className="w-full flex-1 flex justify-center items-center">
        <div
          className="bg-[#F8FAFC] rounded-xl shadow-sm"
          style={{ width: "884px", height: "634px" }}
        >
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
            {/* Left panel */}
            <div className="p-6 sm:p-8 bg-gray-50 shadow-inner rounded-l-lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's meet</h1>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">you</h1>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Just a few details to get you started — including verifying your
                email — so we can personalize your setup.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li
                  className={`cursor-pointer px-3 py-1 border-l-4 ${
                    step === 1
                      ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                      : "border-transparent hover:text-blue-500"
                  }`}
                  onClick={() => setStep(1)}
                >
                  Basic info
                </li>

                <li
                  className={`cursor-pointer px-3 py-1 border-l-4 ${
                    step === 2
                      ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                      : "border-transparent hover:text-blue-500"
                  }`}
                  onClick={() => setStep(2)}
                >
                  Email verification
                </li>
              </ul>
            </div>

            {/* Right panel */}
            <div className="p-6 sm:p-8 h-[600px] overflow-y-auto bg-white shadow-sm rounded-r-lg">
              <BasicInfo
  formData={formData}
  handleChange={handleChange}
  showPassword={showPassword}
  setShowPassword={setShowPassword}
  showConfirmPassword={showConfirmPassword}
  setShowConfirmPassword={setShowConfirmPassword}
  error={error}
  setError={setError}  // <-- Add this line
  handleSubmit={handleSubmit}
/>

            </div>
          </div>
        </div>
      </main>

      {/* Step progress indicator */}
      <div className="flex justify-center gap-4 py-6">
        <div className={`h-1 w-20 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-gray-300"}`}></div>
        <div className={`h-1 w-20 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
        <div className={`h-1 w-20 rounded-full ${step >= 3 ? "bg-blue-600" : "bg-gray-300"}`}></div>
      </div>
    </div>
  );
};

export default LetMeetYou;

"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

interface FormData {
  workEmail: string;
}

interface EmailVerificationProps {
  formData: FormData;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  formData,
  setStep,
}) => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState<number>(116);
  const [error, setError] = useState<string>("");

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // Handle input for each digit
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Focus next input automatically
      if (value && index < 5) {
        const nextInput = document.getElementById(
          `code-${index + 1}`
        ) as HTMLInputElement | null;
        nextInput?.focus();
      }
    }
  };

  // Verify code
  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode.length === 6) {
      setError("");
      setStep(3); // Move to next step (AddCompany)
    } else {
      setError("Please enter the full 6-digit code.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">
      {/* Top Right Login */}
      <div className="w-full flex justify-end text-sm p-4 sm:p-6 md:p-10">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Main Card */}
      <main className="w-full flex-1 flex justify-center items-center">
        <div
          className="bg-[#F8FAFC] rounded-xl shadow-sm"
          style={{ width: "884px", height: "634px" }}
        >
          <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center gap-12 px-8 py-10">
            
            {/* Left Info Section */}
            <div className="w-full max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's meet
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                you
              </h1>
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                Just a few details to get you started — including verifying your
                email — so we can personalize your setup and unlock the right tools.
              </p>

              {/* Step Navigation */}
              <nav className="hidden md:block space-y-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center p-3 border-l-4 border-transparent text-gray-500 hover:text-blue-600"
                >
                  <span>Basic info</span>
                </button>
                <div className="flex items-center p-3 border-l-4 border-blue-600">
                  <span className="text-blue-600 font-semibold">Email verification</span>
                </div>
              </nav>
            </div>

            {/* Right Verification Card */}
            <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold mb-6">
                Email verification
              </h2>

              <p className="text-sm text-black mb-6">
                Enter the code sent to{" "}
                <span className="font-medium">{formData.workEmail}</span>.
              </p>

              {/* 6-digit Code Inputs */}
              <div className="flex justify-between gap-2 mb-4">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(index, e.target.value)
                    }
                    className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>

              {/* Error */}
              {error && (
                <div className="text-red-600 text-sm font-medium mb-4">{error}</div>
              )}

              {/* Timer */}
              <div className="text-sm text-blue-600 font-medium text-center mb-6">
                {formatTime(timer)}
              </div>

              {/* Troubleshooting */}
              <div className="text-sm text-black mb-6">
                <p className="font-bold mb-2">Didn't receive the email?</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Check spam or promotions.</li>
                  <li>Confirm email is correct.</li>
                  <li>Email may be auto-filled incorrectly.</li>
                  <li>Company filters may block it.</li>
                </ol>
              </div>

              <div className="text-sm text-blue-600 hover:underline text-center mb-6">
                <a href="#">Re-enter your email</a>
              </div>

              {/* Verify Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleVerify}
                  className="text-blue-600 font-bold text-lg hover:underline mr-2"
                >
                  Verify
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailVerification;

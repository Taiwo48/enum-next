"use client";

import React, { ChangeEvent, FormEvent } from "react";

interface FormDataType {
  firstName: string;
  lastName: string;
  workEmail: string;
  password: string;
  confirmPassword: string;
}

interface BasicInfoProps {
  formData: FormDataType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>; // <-- added to set error
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({
  formData,
  handleChange,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  error,
  setError,
  handleSubmit,
}) => {

  // Prevent numbers in names
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Regex to allow only letters and spaces
    if (/[^a-zA-Z\s]/.test(value)) {
      setError(`${name === "firstName" ? "First" : "Last"} name cannot contain numbers or special characters`);
      return;
    }

    setError(""); // clear error if valid
    handleChange(e);
  };

  return (
    <>
      <h2 className="text-lg md:text-xl font-semibold mb-6">Basic info</h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleNameChange} // <-- use the new handler
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleNameChange} // <-- use the new handler
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Work email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="workEmail"
              placeholder="e.g name@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-blue-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-blue-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm font-medium">{error}</div>
          )}

          {/* Next Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="text-blue-600 font-bold text-lg hover:underline mr-2"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BasicInfo;

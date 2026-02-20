"use client";

import React from "react";

interface LogoStepProps {
  form: {
    logo: string | null;
    logoName: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      companyName: string;
      industry: string;
      website: string;
      siteName: string;
      companySize: string;
      description: string;
      usagePreferences: string[];
      logo: string | null;
      logoName: string;
    }>
  >;
}

// Put your placeholder image inside /public folder, e.g. /public/upload-field.png
const PLACEHOLDER = "/upload-field.png";

const LogoStep: React.FC<LogoStepProps> = ({ form, setForm }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Logo</h3>

      <label className="w-40 h-40 border rounded-md mb-2 overflow-hidden flex items-center justify-center cursor-pointer hover:bg-gray-100">
        {/* Placeholder */}
        {!form.logo && (
          <img
            src={PLACEHOLDER}
            alt="Upload placeholder"
            className="w-full h-full object-contain opacity-70"
          />
        )}

        {/* Uploaded logo */}
        {form.logo && (
          <img
            src={form.logo}
            alt="Uploaded logo"
            className="w-full h-full object-contain"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setForm((prev) => ({
                ...prev,
                logo: URL.createObjectURL(file),
                logoName: file.name,
              }));
            }
          }}
          className="hidden"
        />
      </label>

      {form.logoName && (
        <p className="text-sm text-gray-700 mb-2">{form.logoName}</p>
      )}
    </div>
  );
};

export default LogoStep;

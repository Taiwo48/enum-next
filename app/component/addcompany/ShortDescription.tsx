"use client";

import React, { ChangeEvent } from "react";

/* -------------------- TYPES -------------------- */
interface FormData {
  description: string;
}

interface ShortDescriptionStepProps {
  form: FormData;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  goToNextStep: () => void;
}

/* -------------------- COMPONENT -------------------- */
const ShortDescriptionStep: React.FC<ShortDescriptionStepProps> = ({
  form,
  handleChange,
  goToNextStep,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Short description</h3>
      <label className="block text-sm text-gray-700 mb-2">
        Give a short description of your company
      </label>
      <textarea
        name="description"
        rows={6}
        maxLength={1000}
        value={form.description}
        onChange={handleChange}
        placeholder="Enter text here"
        className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {form.description.length}/1000 characters
      </div>
      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={goToNextStep}
          className="text-blue-600 font-bold text-lg hover:underline mr-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShortDescriptionStep;

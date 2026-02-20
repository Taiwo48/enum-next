"use client";

import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Dashboard from "../../dashboard/Pages/Dashboard";
import AddCompany from "../addcompany/AddCompany";

export default function InviteYourTeam() {
  const [emailList, setEmailList] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAddCompany, setShowAddCompany] = useState(false);

  const handleAddEmail = () => {
    const newEmails = emailInput
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email.length > 0 && !emailList.includes(email));

    if (newEmails.length > 0) {
      setEmailList([...emailList, ...newEmails]);
      setEmailInput("");
    }
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmailList(emailList.filter((email) => email !== emailToRemove));
  };

  const handleContinue = () => {
    if (agreed) {
      setShowDashboard(true);
    }
  };

  if (showAddCompany) return <AddCompany />;
  if (showDashboard) return <Dashboard />;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12 px-4 md:px-0">

      <div
        className="bg-gray-50 rounded-xl shadow-lg w-full md:w-[867px] max-w-full space-y-6"
        style={{ height: "318px", padding: "16px" }}
      >
        <div className="w-full flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => setShowAddCompany(true)}
            className="flex items-center text-black text-sm font-medium hover:text-gray-700"
          >
            <IoMdArrowBack className="text-xl" />
          </button>

          <span className="text-sm text-gray-600">
            Already on Enum?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Invite your
            </h1>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              team
            </h1>
            <p className="text-gray-600 max-w-sm">
              Want help managing things? Invite teammates now or add them anytime later.
            </p>

            {emailList.length > 0 && (
              <div className="mt-6 inline-flex items-center border border-blue-600 text-blue-600 text-sm font-medium px-4 py-2 rounded-md">
                <span className="mr-2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                {emailList.length} Invite{emailList.length > 1 ? "s" : ""} sent
              </div>
            )}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
            <label className="block text-sm text-gray-700 mb-2">Email</label>

            <div className="flex flex-wrap gap-2 items-center border border-gray-300 rounded-md px-3 py-2 min-h-[52px]">
              {emailList.map((email) => (
                <div
                  key={email}
                  className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  <span className="mr-2">{email}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveEmail(email)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}

              <input
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === ",") {
                    e.preventDefault();
                    handleAddEmail();
                  }
                }}
                placeholder="Enter emails, separated by commas"
                className="flex-grow border-none focus:outline-none text-sm"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleAddEmail}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full md:w-[867px] flex flex-col md:flex-row md:justify-between gap-4">
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>
            I agree to{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!agreed}
          className={`px-6 py-2 rounded-md text-sm font-semibold ${
            agreed
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>

      <div className="mt-auto pb-6 flex justify-center gap-4">
        <div className="h-1 w-20 rounded-full bg-gray-300"></div>
        <div className="h-1 w-20 rounded-full bg-gray-300"></div>
        <div className="h-1 w-20 rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}

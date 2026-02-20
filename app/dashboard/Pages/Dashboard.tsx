import { useState } from "react";
import Header from "../Header";
import Sidebar from "../DashboardSidebar";
import DashboardBanner from "../DashboardBanner";
import NotificationCard from "../NotificationCard";
import CardRow from "../cards/CardRow";
import CoursePerformance from "../CoursePerformances";
import RecentPartnerInstitutes from "../RecentPartnerinstitutes";
import Instructors from "../Instructors";
import MyCalander from "../MyCalander";
import InviteYourTeam from "../../component/inviteyourteam/InviteYourTeam";
import { IoMdArrowBack } from "react-icons/io";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showInviteYourTeam, setShowInviteYourTeam] = useState(false);

  
  if (showInviteYourTeam) {
    return <InviteYourTeam />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      
      <div className="flex flex-col lg:flex-row pt-[80px]">
        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1154px] flex flex-col gap-6">

            
            <button
              type="button"
              onClick={() => setShowInviteYourTeam(true)}
              className="flex items-center gap-2 text-black text-sm font-medium hover:text-gray-700 mb-4"
            >
              <IoMdArrowBack className="text-xl" /> 
            </button>

            <DashboardBanner />

            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
              <h1 className="text-xl font-semibold text-gray-800">
                Welcome <b>Femi</b>
              </h1>

              <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-2 rounded">
                More actions
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            
            <div className="flex flex-col lg:flex-row gap-4">
              
              <div className="flex flex-col gap-4 flex-1">
                <CardRow />
                <CoursePerformance />
              </div>

              
              <div className="flex flex-col gap-4 w-full lg:w-[343px] flex-shrink-0">
                <NotificationCard />
                <MyCalander />
              </div>
            </div>

            
            <div className="flex flex-col gap-4">
              <RecentPartnerInstitutes />
              <Instructors />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

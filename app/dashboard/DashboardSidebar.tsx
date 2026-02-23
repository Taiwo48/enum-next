"use client";

import React from "react";
import {
  Home,
  BookOpen,
  Users,
  FileText,
  ClipboardCheck,
  MessageSquare,
  Calendar,
  Bell,
  Megaphone,
  User,
  Settings,
  LogOut,
} from "lucide-react";

// Props for sidebar
interface DashboardSidebarProps {
  isOpen: boolean; // controls visibility on mobile
}

// Props for each item
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed
        top-[80px]
        left-0
        w-[286px]
        h-[calc(100vh-80px)]
        bg-white
        border-r border-gray-200
        flex flex-col justify-between
        px-4 py-6
        z-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0
      `}
    >
      <nav className="space-y-2">
        <SidebarItem icon={<Home size={18} />} label="Home" active />
        <SidebarItem icon={<BookOpen size={18} />} label="Training institutes" />
        <SidebarItem icon={<Users size={18} />} label="Instructors" />
        <SidebarItem icon={<FileText size={18} />} label="Learners" />
        <SidebarItem icon={<ClipboardCheck size={18} />} label="Applications" />
        <SidebarItem icon={<ClipboardCheck size={18} />} label="Assessment" />
        <SidebarItem icon={<MessageSquare size={18} />} label="Question bank" />
        <SidebarItem icon={<FileText size={18} />} label="Forms" />
        <SidebarItem icon={<Calendar size={18} />} label="Calendar" />
        <SidebarItem icon={<Bell size={18} />} label="Notifications" />
        <SidebarItem icon={<Megaphone size={18} />} label="Announcements" />
      </nav>

      <div className="space-y-1 pt-4">
        <SidebarItem icon={<User size={18} />} label="Profile" />
        <SidebarItem icon={<Settings size={18} />} label="Configuration" />
        <SidebarItem icon={<LogOut size={18} />} label="Log out" />
      </div>
    </aside>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => (
  <div
    className={`
      flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm
      ${active ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"}
    `}
  >
    {icon}
    {label}
  </div>
);

export default DashboardSidebar;
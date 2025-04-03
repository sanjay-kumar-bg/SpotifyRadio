import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import PlayListCard from "./PlayListCard";
import { UserData } from "../context/User";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = UserData();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      {/* Mobile sidebar toggle button - only show when sidebar is closed */}
      {!isMobileSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-[#121212] p-2 rounded-full text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 3v18"></path>
          </svg>
        </button>
      )}

      {/* Sidebar for both mobile and desktop */}
      <div
        className={`${
          isMobileSidebarOpen
            ? "fixed top-0 left-0 w-[80%] h-full z-40 flex"
            : "w-[25%] h-full hidden lg:flex"
        } p-2 flex-col gap-2 text-white bg-black`}
      >
        {/* Close button for mobile view */}
        {isMobileSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        <div className="bg-[#121212] h-[25%] rounded flex flex-col justify-around gap-2">
          <div
            className="flex items-center gap-3 pl-8 cursor-pointer"
            onClick={() => {
              navigate("/");
              if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
            }}
          >
            <img src={assets.home_icon} className="w-6" alt="" />
            <p className="font-bold">Home</p>
          </div>
          <div
            className="flex items-center gap-3 pl-8 cursor-pointer"
            onClick={() => {
              navigate("/");
              if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
            }}
          >
            <img src={assets.search_icon} className="w-6" alt="" />
            <p className="font-bold">Search</p>
          </div>
          <div
            onClick={() => {
              navigate("/radio");
              if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
            }}
            className="flex items-center gap-3 pl-8 cursor-pointer"
          >
            <img className="w-6" src={assets.radio_icon} alt="" />
            <p className="font-bold">Radio</p>
          </div>
        </div>

        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={assets.stack_icon} className="w-6" alt="" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={assets.arrow_icon} className="w-6" alt="" />
              <img src={assets.plus_icon} className="w-6" alt="" />
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/playlist");
              if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
            }}
          >
            <PlayListCard />
          </div>

          <div className="p-2 bg-[#121212] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Let's findsome podcasts to follow</h1>
            <p className="font-light text-sm">
              we'll keep you update on new episodes
            </p>
            <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
              Browse Podcasts
            </button>
            {user && user.role === "admin" && (
              <button
                className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4"
                onClick={() => {
                  navigate("/admin");
                  if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
                }}
              >
                Admin Dashboard
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { CgCommunity } from "react-icons/cg";
import { FaBlogger } from "react-icons/fa";
import { BsWechat, BsFillPinFill } from "react-icons/bs";
//import logoImage from "../assets/logo.jpg"; // Update this path as needed

const isNoteActiveStyle =
  "flex flex-col items-center py-2 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize mx-5";
const isActiveStyle =
  "flex flex-col items-center py-2 gap-3 font-extrabold border-b-2 border-black transition-all duration-200 ease-in-out capitalize mx-4";

export default function Navbar({ user, role }) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  function handleLogout() {
    localStorage.removeItem("HealBuddyAuth");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="px-4 flex items-center justify-evenly shadow-md">
      <div className="flex items-center">
        <img src="" alt="logo" className="w-14 h-14 rounded-full" />
        <div className="flex flex-col ml-4">
          <h1 className="text-xl font-bold text-red-400 font-mono">CareSync</h1>
          <p className="text-xl font-bold">POWERED BY AI</p>
        </div>
      </div>

      <div className="border-gray-500 flex ">
        <div className="mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNoteActiveStyle
            }
          >
            <HiHome fontSize={25} />
            Home
          </NavLink>
        </div>

        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNoteActiveStyle
          }
        >
          <CgCommunity fontSize={25} />
          Community
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNoteActiveStyle
          }
        >
          <FaBlogger fontSize={25} />
          Blogs
        </NavLink>
        {role === "expert" && (
          <>
            <NavLink
              to="/ai-chatbot"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNoteActiveStyle
              }
            >
              <BsWechat fontSize={25} />
              24/7 Chat
            </NavLink>
            <NavLink
              to={`/expert/${user?._id}/pings`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNoteActiveStyle
              }
            >
              <BsFillPinFill fontSize={25} />
              Pings
            </NavLink>
          </>
        )}
        {role === "client" && (
          <NavLink
            to="/ai-chatbot"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNoteActiveStyle
            }
          >
            <BsWechat fontSize={25} />
            24/7 Chat
          </NavLink>
        )}
      </div>

      {!user ? (
        <div className="shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md">
          <Link
            to="/login"
            className="py-1 px-4 bg-blue-500 text-white hover:bg-blue-400 transition-all duration-300 rounded-lg outline-none"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="py-1 px-4 text-blue-500 hover:text-blue-400 transition-all duration-300 rounded-lg outline-none"
          >
            Signup
          </Link>
        </div>
      ) : (
        !confirmLogout && (
          <button
            type="button"
            className="shadow-lg flex justify-center rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up"
            onClick={() => setConfirmLogout(!confirmLogout)}
          >
            Logout
          </button>
        )
      )}
      {confirmLogout && (
        <div className="shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up">
          <button
            type="button"
            onClick={handleLogout}
            className="py-1 px-4 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 rounded-lg outline-none"
          >
            Logout
          </button>
          <button
            type="button"
            onClick={() => setConfirmLogout(false)}
            className="py-1 px-4 text-red-500 hover:text-red-400 transition-all duration-300 rounded-lg outline-none"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

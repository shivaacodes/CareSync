import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Dashboard({ user, role }) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  function handleLogout() {
    localStorage.removeItem("CareSyncAuth");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div className="sticky top-10 left-0 flex flex-col justify-between bg-mainColor md:w-275 min-w-210 overflow-y-auto hide-scrollbar shadow-lg h-[95vh]">
      <div className="mt-10 ml-5 md:mt-0"></div>
    </div>
  );
}

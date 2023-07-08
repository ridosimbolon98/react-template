import React, { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlinePower } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { getUserDataFromSession } from "../../utils/auth/SessionService";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const retrievedUserData = getUserDataFromSession();
  const [isUsernameDropdownOpen, setIsUsernameDropdownOpen] = useState(false);

  const toggleUsernameDropdown = () => {
    setIsUsernameDropdownOpen(!isUsernameDropdownOpen);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target
          .closest("li")
          ?.querySelectorAll("a[href='/auth/profile'], a[href='/logout']")
          .length === undefined
      ) {
        setIsUsernameDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <a
              href="/home"
              className="text-gray-100 text-lg font-semibold hover:text-gray-300"
            >
              Rido Martupa
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#"
              className="text-gray-100 hover:bg-gray-200/20 hover:text-white px-4 py-2 bg-slate-900 rounded-md text-sm font-semibold"
            >
              Home
            </a>
            {/* User dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-50 px-3 py-2 outline outline-1 outline-gray-100 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:bg-gray-100 focus:text-gray-800 rounded-[20px] drop-shadow-md"
                onClick={toggleUsernameDropdown}
              >
                <FaUser
                  className={`text-sm font-semibold outline outline-1 outline-gray-100 rounded-full`}
                />
                <span className={`text-sm font-semibold lg:block ml-2`}>
                  {retrievedUserData && retrievedUserData[0].name}
                </span>
              </button>
              {isUsernameDropdownOpen && (
                <ul className="absolute z-10 right-0 mt-2 py-2 px-2 bg-blue-800 shadow-lg rounded">
                  <li className="px-4 py-1 hover:bg-slate-200 rounded-sm drop-shadow-sm hover:text-gray-800">
                    <Link
                      to={"/logout"}
                      className="flex gap-1 py-1 items-center text-sm text-gray-200 hover:text-gray-800"
                    >
                      <HiOutlinePower className="mr-2" />
                      <span className="text-xs">Logout</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="md:hidden">
            {/* Hamburger menu */}
            <button
              type="button"
              className="text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
              onClick={handleMenuToggle}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                stroke="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-3 z-10 flex flex-col bg-gray-700 transition-all duration-300 ease-in-out">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-200/20 hover:text-white px-4 py-3 rounded-md text-sm font-semibold flex items-center"
          >
            <HiOutlineHome className="mr-2" />
            <span>Home</span>
          </a>
          {/* User dropdown */}
          <div className="relative">
            <button
              className="flex items-center text-slate-200 px-4 py-2 outline outline-1 outline-gray-100 hover:bg-white hover:text-black focus:outline-none rounded drop-shadow-md"
              onClick={toggleUsernameDropdown}
            >
              <FaUser className={`text-sm font-semibold`} />
              <span className={`text-sm font-semibold lg:block ml-2`}>
                {retrievedUserData && retrievedUserData[0].name}
              </span>
            </button>
            {isUsernameDropdownOpen && (
              <ul className="z-10 right-0 mt-2 py-2 px-2 bg-white shadow-lg rounded">
                <li className="px-4 py-1 hover:bg-slate-200 rounded-sm drop-shadow-sm hover:text-gray-800">
                  <Link
                    to={"/logout"}
                    className="flex gap-1 py-1 items-center text-sm text-black hover:text-gray-800"
                  >
                    <HiOutlinePower className="mr-2" />
                    <span className="text-xs">Logout</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/assets/Logo/logo.png";
import { BsCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../Context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-100 shadow-md py-2 font-bold z-50 font-serif fixed w-full top-0 left-0">
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-green-700 italic"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="hover:text-amber-700">Giri Furni</span>
        </NavLink>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {["/", "/shop", "/about", "/services", "/blog", "/contact"].map(
            (path, i) => {
              const label = [
                "Home",
                "Shop",
                "About Us",
                "Services",
                "Blog",
                "Contact Us",
              ][i];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                      : "text-gray-600 hover:text-amber-600 transition duration-200"
                  }
                >
                  {label}
                </NavLink>
              );
            }
          )}
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                : "text-gray-600 hover:text-amber-600 transition duration-200"
            }
          >
            <div className="relative">
              <BsCartCheckFill size={30} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </NavLink>
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="focus:outline-none">
              {isAuthenticated && user?.picture ? (
                <img
                  src={user.picture}
                  alt="Profile"
                  className="h-5 w-5 rounded-full object-cover"
                />
              ) : (
                <CgProfile
                  size={28}
                  className="text-gray-600 hover:text-amber-600"
                />
              )}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                {isAuthenticated ? (
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 rounded-2xl hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 rounded-2xl hover:bg-gray-100"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-amber-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 shadow-md py-4 px-6 space-y-4 z-20">
            {["/", "/shop", "/about", "/services", "/blog", "/contact"].map(
              (path, i) => {
                const label = [
                  "Home",
                  "Shop",
                  "About Us",
                  "Services",
                  "Blog",
                  "Contact Us",
                ][i];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block text-amber-600 border-b-2 border-amber-600 pb-1"
                        : "block text-gray-600 hover:text-amber-600 transition duration-200"
                    }
                  >
                    {label}
                  </NavLink>
                );
              }
            )}
            <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
              <BsCartCheckFill
                size={28}
                className="text-gray-600 hover:text-amber-600"
              />
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

// import React from 'react'
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import Login from "./Login";
import { useShop } from "../contexts/ShopContexts";
export default function Navbar({ children }) {
  const [open, setOpen] = useState(false);

  //-----------------------namann_add_ons---------------------------

  const { cities, catagoriesData, search, setSearch } = useShop();

  const handleCatagNav = (e) => {
    e.preventDefault();
    let value;
    value = e.target.value;

    setSearch((prev) => {
      const prev_data = { ...prev };
      prev_data["what"] = value;
      return prev_data;
    });

    if (search["where"].length > 0) window.location.href = "/searched";
  };

  const handleCityNav = (e) => {
    e.preventDefault();
    let value;
    value = e.target.value;

    setSearch((prev) => {
      const prev_data = { ...prev };
      prev_data["where"] = value;
      return prev_data;
    });

    //   if (search["where"].length > 0) window.location.href = "/searched";
  };

  //----------------------------------------------------------------

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className=" w-full navbar bg-accent z-[1] ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img src="/Images/logo.png" alt="logo" className="w-20 h-20" />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-5 text-white">
              <li>
                <select className="bg-transparent" onChange={handleCatagNav}>
                  <option>Explore Categories</option>
                  {catagoriesData != null ? (
                    catagoriesData.map((ele, index) => {
                      return (
                        <option key={index} value={ele}>
                          {ele}
                        </option>
                      );
                    })
                  ) : (
                    <object>no catagories</object>
                  )}
                </select>
              </li>
              <li>
                <select className="bg-transparent" onChange={handleCityNav}>
                  <option>Explore Locations</option>
                  {cities != null ? (
                    cities.map((ele, index) => {
                      return (
                        <option key={index} value={ele}>
                          {ele}
                        </option>
                      );
                    })
                  ) : (
                    <option>no cities</option>
                  )}
                </select>
              </li>
              <li>
                <button className="bg-secondary text-white font-medium">
                  <Link
                    to="/add-listing"
                    className="flex justify-center items-center gap-x-3"
                  >
                    <IoIosAddCircleOutline className="text-xl" />
                    Add Listing
                  </Link>
                </button>
              </li>
              <li>
                <button
                  className="border-[1px] font-medium border-white gap-3"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <BsPersonCircle className="text-xl" />
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="flex flex-col justify-between items-center">
          {children}
          {open && <Login setOpen={setOpen} open={open} />}
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

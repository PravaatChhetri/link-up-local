// import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import Login from "./Login";
import { useShop } from "../contexts/ShopContexts";

export default function Navbar({ children }) {
  const [open, setOpen] = useState(false);

  //-----------------------namann_add_ons---------------------------
  console.log("navbar");

  const { cityData, cities, catagoriesData, search, setSearch } = useShop();
  const [typeSearch, setTypeSearch] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [suggList, setSuggList] = useState([]);

  const handleSearchButton = (e) => {
    console.log(typeSearch);
    window.location.href = `/searched?what=${""}&name=${typeSearch}&where=${""}`;
  };

  const handleTypeSearch = (e) => {
    let name, search_value;
    name = e.target.name;
    search_value = e.target.value.toLowerCase();
    setTypeSearch(search_value);

    // console.log(cityData);
    let search_list = new Array();
    let search_res_list = new Array();

    let total_res = 0;

    for (const [key, value] of Object.entries(cityData)) {
      for (let i = 0; i < value.length; i++) {
        const shop_name = value[i].shop_data.shop_name;
        if (shop_name.includes(search_value) && total_res < 5) {
          total_res++;
          search_list.push(shop_name);
          search_res_list.push(value[i]);
          // console.log(shop_name);
        }
      }
    }

    setSuggList(search_res_list);
    setSuggestions(search_list);
    // console.log(suggList);
  };

  const handleSuggestionClick = (e) => {
    setTypeSearch(e.target.value);
    console.log(e.target.value);
    window.location.href = `/searched?what=${""}&name=${
      e.target.value
    }&where=${""}`;
  };

  const handleCatagNav = (e) => {
    let value;
    value = e.target.value;

    window.location.href = `/searched?what=${value}&name=${""}&where=${""}`;
  };

  const handleCityNav = (e) => {
    let value;
    value = e.target.value;

    window.location.href = `/searched?what=${""}&name=${""}&where=${value}`;
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
            <Link to="/">
              <img src="/Images/logo.png" alt="logo" className="w-20 h-20" />
            </Link>
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

              <div>
                <li className="relative">
                  <div className="relative border-[1px] border-white rounded-xl w-[300px] p-0 ">
                    <input
                      type="search"
                      placeholder="Search"
                      className="bg-transparent border-white p-2 w-[255px] focus:outline-none text-base"
                      name="typeSearch"
                      value={typeSearch}
                      onChange={handleTypeSearch}
                    />
                    <button type="submit" onClick={handleSearchButton}>
                      <BsSearch className="text-xl" />
                    </button>
                  </div>

                  <div
                    className={`absolute left-0 ${
                      typeSearch ? "top-full" : "invisible"
                    } mt-1 bg-transparent border-[1px] border-gray-300 rounded-md shadow-md w-[300px] overflow-hidden z-10 flex flex-col items-start`}
                  >
                    {suggestion != null && suggestion.length > 0 ? (
                      suggestion.map((ele, index) => (
                        <button
                          key={index}
                          value={ele}
                          className="p-2 hover:bg-secondary cursor-pointer w-full text-left w-full rounded-md"
                          onClick={handleSuggestionClick}
                        >
                          {ele}
                        </button>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </li>
              </div>

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
        <ul className="menu p-4 w-80 min-h-full bg-primary space-y-3">
          {/* Sidebar content here */}
          <Link to="/" className="flex w-full justify-center items-center">
            <img src="/Images/logo.png" alt="logo" className="w-40 h-40" />
          </Link>
          <li>
            <div className="w-[250px] p-0 ml-3 border-[1px] border-[#000]">
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent w-[210px] p-1 focus:outline-none text-base"
              />
              <BsSearch />
            </div>
          </li>
          <li>
            <select className="bg-transparent py-4" onChange={handleCatagNav}>
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
            <select className="bg-transparent  py-4" onChange={handleCityNav}>
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
            <button className=" font-medium py-4">
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
              className="font-medium  gap-3 py-4"
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
  );
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

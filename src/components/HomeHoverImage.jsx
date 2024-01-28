import React from "react";
import { useShop } from "../contexts/ShopContexts";
import { Link } from "react-router-dom";

function HomeHoverImage({ name, image, index }) {
  //----------------naman_add_ons------------------------

  const { cities, catagoriesData, search, setSearch } = useShop();

  const handleCityImage = (e) => {
    let name, value;
    name = e.target.name.toLowerCase();
    value = e.target.value.toLowerCase();
    console.log(value);
    setSearch((prev) => {
      const prev_data = { ...prev };
      prev_data["where"] = value;
      return prev_data;
    });
  };

  //-----------------------------------------------------

  return (
    <div
      className={`relative w-96 bg-base-100 shadow-xl h-[400px] hover:grayscale-[75%] text-black transition-all font-normal hover:font-bold ease-in delay-150 hover:text-white hover:bg-[#0000004d] overflow-hidden  duration-300 hover:scale-105 hover:z-10`}
    >
      <Link to="/searched">
        <img className="object-fill w-full h-full  " src={image} alt="Region" />
        <div className="absolute top-1/2 left-1/2 flex justify-center items-center text-6xl font-bold transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 hover:opacity-90 transition-opacity duration-300 h-full w-full">
          <button name={name} value={name} onClick={handleCityImage}>
            {name}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default HomeHoverImage;

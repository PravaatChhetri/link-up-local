import React, { useEffect, useState, useContext, createContext } from "react";
import Home from "../pages/Home";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // for loading the shop data cityWise and catagoryWise
  const [cityData, setCityData] = useState(null);
  const [catagData, setCatagData] = useState(null);
  const [cities, setCities] = useState([]);
  const [catagoriesData, setCatagoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //for search results :
  const [search, setSearch] = useState({
    what: "",
    where: "",
  });

  const api_string = "http://localhost:8000/Users/api";

  useEffect(() => {
    const fetchDataCityWise = async () => {
      try {
        const response = await fetch(`${api_string}/shops_city/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCityData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataCityWise();

    const fetchDataCatagWise = async () => {
      try {
        const response = await fetch(`${api_string}/shops_catagories/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCatagData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataCatagWise();
  }, []);

  useEffect(() => {
    var city = [];
    var catag = [];
    if (cityData != null) {
      for (let [key, value] of Object.entries(cityData)) {
        city.push(key);
      }
      setCities(city);
    }
    if (catagData != null) {
      for (let [key, value] of Object.entries(catagData)) {
        catag.push(key);
      }
      setCatagoriesData(catag);
    }
  }, [cityData]);

  return cityData != null ? (
    <ShopContext.Provider
      value={{
        cityData,
        cities,
        setCities,
        catagoriesData,
        setCatagoriesData,
        search,
        setSearch,
      }}
    >
      {children}
    </ShopContext.Provider>
  ) : (
    <h1>Something went wrong</h1>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};

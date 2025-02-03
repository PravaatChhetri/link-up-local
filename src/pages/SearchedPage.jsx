import React, { useState, useEffect, useContext, createContext } from "react";
import { useShop } from "../contexts/ShopContexts";
import EandPcard from "../components/EandPcard";
import { bool, element } from "prop-types";
import { navBarSearch } from "../contexts/search";

export default function SearchedPage() {
  //-----------------naman_add_ons-----
  const { cityData, search, setSearch } = useShop();
  const [searchResult, setSearchResult] = useState([]);

  var result = [];
  const city = search["where"];
  const cat = search["what"];

  // Accessing the query parameters
  // console.log("search");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const what = urlParams.get("what");
    const where = urlParams.get("where");

    // console.log(name, what, where);
    if (name != null || what != null || where != null) {
      navBarSearch(name, what, where)
        .then((res) => {
          // console.log(res);
          result = res;
          return result;
        })
        .then((data) => {
          setSearchResult(data);
        });
    }
    setSearchResult(result);
  }, []);

  // useEffect(() => {
  //   // console.log(searchResult);
  // }, [searchResult]);

  if (
    search != null &&
    (search["what"].length > 0 || search["where"].length > 0)
  ) {
    for (let [key, value] of Object.entries(cityData)) {
      if (key === city || city.length === 0) {
        value.forEach((ele) => {
          ele.catagories.forEach((shop) => {
            if (shop === cat || cat.length === 0) {
              let exist = result.find(
                (id) => id.provider_id === ele.provider_id
              );

              if (!exist) result.push(ele);
            }
          });
        });
      }
    }
  }

  //-----------------------------------

  return (
    <div className="flex justify-start items-center p-5 gap-5">
      {searchResult != null && searchResult.length > 0 ? (
        searchResult.map((ele, index) => {
          return (
            <EandPcard
              key={index}
              name={ele["shop_data"]["shop_name"]}
              image={"/Images/restrauant.jpeg"}
              rating={ele["shop_data"]["rating_avg"]}
              reviews={ele["shop_data"]["rating_review"]}
              pricing={ele["shop_data"]["pricing"]}
              type={ele["catagories"].join(", ")}
              place={ele["address"]["city"]}
              phone_number={ele["shop_data"]["contact_info"]["phone_no"]}
            />
          );
        })
      ) : (
        <h1>no result for this search</h1>
      )}
    </div>
  );
}

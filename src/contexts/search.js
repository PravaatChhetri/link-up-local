// doing for search
// console.log("working");
var search_result = [];

const api_string = "https://linkuplocal.onrender.com/Users/api";

async function navBarSearch(na, wa, wh) {
  const data = {
    search: {
      name: na,
      what: wa,
      where: wh,
    },
  };

  //   console.log(JSON.stringify(data));
  try {
    const response = await fetch(`${api_string}/navbar_search/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    search_result = await response.json();
    // console.log(search_result);
    return search_result;
    console.log(search_result);
  } catch (error) {
    console.error("Error during POST request:", error.message);
  }
}

export { search_result, navBarSearch };

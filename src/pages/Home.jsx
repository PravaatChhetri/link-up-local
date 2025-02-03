import { IoIosSearch } from "react-icons/io";
import HomeHoverImage from "../components/HomeHoverImage";
import EandPcard from "../components/EandPcard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useShop } from "../contexts/ShopContexts";

// import SimpleSlider from "../components/Carousel";

function Home() {
  const { cities, catagoriesData, setSearch } = useShop();
  const handleSearchWhere = (e) => {
    let value;
    // name = e.target.name.toLowerCase();
    value = e.target.value.toLowerCase();
    setSearch((prev) => {
      const prev_data = { ...prev };
      prev_data["where"] = value;
      return prev_data;
    });
  };

  const handleSearchWhat = (e) => {
    let value;
    // name = e.target.name.toLowerCase();
    value = e.target.value.toLowerCase();
    setSearch((prev) => {
      const prev_data = { ...prev };
      prev_data["what"] = value;
      return prev_data;
    });
  };

  const handleCatagButton = (e) => {
    let value;
    value = e.target.value.toLowerCase();

    setSearch((prev) => {
      const prev_data = { ...prev };
      prev_data["what"] = value;
      return prev_data;
    });
  };

  // --------------------------------------
  return (
    <div>
      <div className="h-screen lg:h-[90vh] w-full lg:w-[100vw] main_background -mt-[100px] flex flex-col justify-center items-center background-tint p-2">
        <h1 className="text-6xl text-white font-bold mb-4 text-center mt-5 lg:mt-0">
          Explore Your City
        </h1>
        <p className="text-xl text-white  mb-2 font-light">
          Discover Local, Link Up Anywhere
        </p>
        <div className="w-[75vw] min-h-[75px] bg-white rounded-md m-2  flex justify-center items-center gap-3 p-3 flex-col lg:flex-row">
          <div className="flex justify-center items-center p-2 rounded-lg bg-[#e9f5e9] w-full">
            <span className="text-secondary p-2 text-md font-semibold">
              What
            </span>
            <div className="w-full  h-[90%]">
              <select
                className="bg-transparent w-full h-full p-2"
                name="searchOption"
                onChange={handleSearchWhat}
              >
                <option>searh with catagory</option>
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
            </div>
          </div>
          <div className="flex justify-center items-center p-2 rounded-lg bg-[#e9f5e9] w-full">
            <span className="text-secondary p-2 font-semibold">Where</span>
            <div className="w-full  h-[90%]">
              <select
                className=" w-full h-full bg-transparent p-2"
                onChange={handleSearchWhere}
              >
                <option>Search city</option>
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
            </div>
          </div>
          <button className="rounded-lg text-white w-full lg:w-[10%]  bg-secondary p-4 h-[90%] flex justify-center lg:justify-evenly items-center text-xl gap-2">
            <Link
              to="/searched"
              className="flex justify-center items-center gap-x-3"
            >
              <IoIosSearch className="text-2xl font-bold" />
              Search
            </Link>
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-stretch text-white gap-[3px] mt-5">
          <div className="flex flex-col justify-between items-center w-[125px] lg:rounded-l-full  p-4 bg-opacity-25 bg-white hover:bg-secondary hover:bg-opacity-100 transition-all ease-in delay-100 ">
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.107 5.52246C22.4508 5.52246 22.7086 5.86621 22.6227 6.16699L22.3648 7.19824C22.3219 7.45605 22.107 7.58496 21.8922 7.58496H20.9898C21.5914 8.10059 21.9781 8.83105 21.9781 9.64746V11.71C21.9781 12.4404 21.6773 13.042 21.2906 13.5146V15.835C21.2906 16.6084 20.6461 17.21 19.9156 17.21H18.5406C17.7672 17.21 17.1656 16.6084 17.1656 15.835V14.46H6.16563V15.835C6.16563 16.6084 5.52109 17.21 4.79063 17.21H3.41563C2.64219 17.21 2.04063 16.6084 2.04063 15.835V13.5146C1.61094 13.042 1.35313 12.4404 1.35313 11.71V9.64746C1.35313 8.83105 1.69688 8.10059 2.29844 7.58496H1.43906C1.18125 7.58496 0.966407 7.45605 0.923438 7.19824L0.665626 6.16699C0.579688 5.86621 0.837501 5.52246 1.18125 5.52246H3.71641L4.44688 3.76074C5.17734 1.91309 6.93906 0.709961 8.91563 0.709961H14.3727C16.3492 0.709961 18.1109 1.91309 18.8414 3.76074L19.5719 5.52246H22.107ZM6.98203 4.79199L6.16563 6.89746H17.1656L16.3063 4.79199C15.9625 3.97559 15.232 3.45996 14.3727 3.45996H8.91563C8.05625 3.45996 7.32578 3.97559 6.98203 4.79199ZM4.79063 11.71C5.60703 11.71 6.85313 11.8389 6.85313 11.0225C6.85313 10.2061 5.60703 8.95996 4.79063 8.95996C3.93125 8.95996 3.41563 9.51855 3.41563 10.335C3.41563 11.1943 3.93125 11.71 4.79063 11.71ZM18.5406 11.71C19.357 11.71 19.9156 11.1943 19.9156 10.335C19.9156 9.51855 19.357 8.95996 18.5406 8.95996C17.6813 8.95996 16.4781 10.2061 16.4781 11.0225C16.4781 11.8389 17.6813 11.71 18.5406 11.71Z"
                fill="white"
              />
            </svg>
            <Link to="/searched">
              <button onClick={handleCatagButton} value={"automotive"}>
                Automotive
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center  min-w-[125px] p-4  bg-[#ffffff] bg-opacity-25 hover:bg-secondary hover:bg-opacity-100 transition-all ease-in delay-100 ">
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7105 7.20996C24.8823 7.20996 25.0542 7.38184 25.0542 7.55371C25.0113 8.75684 24.7105 12.9678 21.23 16.1475C17.6206 19.6279 14.0542 19.585 12.6792 19.585C11.3042 19.585 7.69485 19.6279 4.08547 16.1475C0.605005 12.9678 0.304224 8.75684 0.304224 7.55371C0.261255 7.38184 0.43313 7.20996 0.605005 7.20996C1.8511 7.25293 6.40579 7.51074 9.80032 10.7764C11.2183 12.0654 12.0777 13.5264 12.6792 14.8584C13.2378 13.5264 14.0972 12.0654 15.5152 10.7764C18.9097 7.51074 23.4644 7.25293 24.7105 7.20996ZM12.6363 11.9795C12.1206 11.1631 11.4761 10.4326 10.7027 9.78809C9.92922 8.97168 9.06985 8.37012 8.16751 7.85449C8.89797 4.84668 10.4019 2.13965 12.3355 0.463867C12.5073 0.334961 12.8081 0.334961 12.98 0.463867C14.9136 2.13965 16.4175 4.84668 17.148 7.85449C16.2456 8.37012 15.3863 9.01465 14.5698 9.83105C13.8394 10.4326 13.1948 11.1631 12.6363 11.9795Z"
                fill="white"
              />
            </svg>
            <Link to="/searched">
              <button onClick={handleCatagButton} value={"beauty"}>
                Beauty & Spa
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center w-[125px] p-4 bg-opacity-25 bg-white hover:bg-secondary hover:bg-opacity-100 transition-all ease-in delay-100 ">
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3531 3.70996H23.6656V20.21H24.3531C24.6969 20.21 25.0406 20.5537 25.0406 20.8975V22.2725C25.0406 22.6592 24.6969 22.96 24.3531 22.96H14.0406V19.5225C14.0406 19.1787 13.6969 18.835 13.3531 18.835H11.9781C11.5914 18.835 11.2906 19.1787 11.2906 19.5225V22.96H0.978126C0.591407 22.96 0.290626 22.6592 0.290626 22.2725V20.8975C0.290626 20.5537 0.591407 20.21 0.978126 20.21H1.62266V3.70996H0.978126C0.591407 3.70996 0.290626 3.40918 0.290626 3.02246V1.64746C0.290626 1.30371 0.591407 0.959961 0.978126 0.959961H24.3531C24.6969 0.959961 25.0406 1.30371 25.0406 1.64746V3.02246C25.0406 3.40918 24.6969 3.70996 24.3531 3.70996ZM11.2906 5.64355V7.31934C11.2906 7.57715 11.5484 7.83496 11.8063 7.83496H13.482C13.7398 7.83496 14.0406 7.57715 14.0406 7.31934V5.64355C14.0406 5.38574 13.7398 5.08496 13.482 5.08496H11.8063C11.5484 5.08496 11.2906 5.38574 11.2906 5.64355ZM11.2906 9.76855V11.4443C11.2906 11.7021 11.5484 11.96 11.8063 11.96H13.482C13.7398 11.96 14.0406 11.7021 14.0406 11.4443V9.76855C14.0406 9.51074 13.7398 9.20996 13.482 9.20996H11.8063C11.5484 9.20996 11.2906 9.51074 11.2906 9.76855ZM5.79063 5.64355V7.31934C5.79063 7.57715 6.04844 7.83496 6.30625 7.83496H7.98203C8.23984 7.83496 8.54063 7.57715 8.54063 7.31934V5.64355C8.54063 5.38574 8.23984 5.08496 7.98203 5.08496H6.30625C6.04844 5.08496 5.79063 5.38574 5.79063 5.64355ZM7.98203 11.96C8.23984 11.96 8.54063 11.7021 8.54063 11.4443V9.76855C8.54063 9.51074 8.23984 9.20996 7.98203 9.20996H6.30625C6.04844 9.20996 5.79063 9.51074 5.79063 9.76855V11.4443C5.79063 11.7021 6.04844 11.96 6.30625 11.96H7.98203ZM8.54063 17.46H16.7906C16.7906 15.1826 14.943 13.335 12.6656 13.335C10.3453 13.335 8.54063 15.1826 8.54063 17.46ZM19.5406 11.4443V9.76855C19.5406 9.51074 19.2398 9.20996 18.982 9.20996H17.3063C17.0484 9.20996 16.7906 9.51074 16.7906 9.76855V11.4443C16.7906 11.7021 17.0484 11.96 17.3063 11.96H18.982C19.2398 11.96 19.5406 11.7021 19.5406 11.4443ZM19.5406 7.31934V5.64355C19.5406 5.38574 19.2398 5.08496 18.982 5.08496H17.3063C17.0484 5.08496 16.7906 5.38574 16.7906 5.64355V7.31934C16.7906 7.57715 17.0484 7.83496 17.3063 7.83496H18.982C19.2398 7.83496 19.5406 7.57715 19.5406 7.31934Z"
                fill="white"
              />
            </svg>
            <Link to="/searched">
              <button onClick={handleCatagButton} value={"hotels"}>
                Hotels
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center w-[125px] p-4 bg-opacity-25 bg-white hover:bg-secondary hover:bg-opacity-100 transition-all ease-in delay-100 ">
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6031 9.95996C21.7203 9.95996 22.6656 10.9053 22.6656 12.0225C22.6656 13.1826 21.7203 14.085 20.6031 14.085H2.72813C1.56797 14.085 0.665626 13.1826 0.665626 12.0225C0.665626 10.9053 1.56797 9.95996 2.72813 9.95996H20.6031ZM21.2906 15.46C21.6344 15.46 21.9781 15.8037 21.9781 16.1475V16.835C21.9781 18.3818 20.732 19.585 19.2281 19.585H4.10313C2.55625 19.585 1.35313 18.3818 1.35313 16.835V16.1475C1.35313 15.8037 1.65391 15.46 2.04063 15.46H21.2906ZM3.15781 8.58496C1.69688 8.58496 0.837501 6.7373 1.65391 5.3623C3.41563 2.56934 7.19688 0.37793 11.6656 0.334961C16.0914 0.37793 19.9156 2.56934 21.6344 5.3623C22.4508 6.7373 21.5914 8.58496 20.1305 8.58496H3.15781ZM17.1656 3.77246C16.7789 3.77246 16.4781 4.11621 16.4781 4.45996C16.4781 4.84668 16.7789 5.14746 17.1656 5.14746C17.5094 5.14746 17.8531 4.84668 17.8531 4.45996C17.8531 4.11621 17.5094 3.77246 17.1656 3.77246ZM11.6656 2.39746C11.2789 2.39746 10.9781 2.74121 10.9781 3.08496C10.9781 3.47168 11.2789 3.77246 11.6656 3.77246C12.0094 3.77246 12.3531 3.47168 12.3531 3.08496C12.3531 2.74121 12.0094 2.39746 11.6656 2.39746ZM6.16563 3.77246C5.77891 3.77246 5.47813 4.11621 5.47813 4.45996C5.47813 4.84668 5.77891 5.14746 6.16563 5.14746C6.50938 5.14746 6.85313 4.84668 6.85313 4.45996C6.85313 4.11621 6.50938 3.77246 6.16563 3.77246Z"
                fill="white"
              />
            </svg>
            <Link to="/searched">
              <button onClick={handleCatagButton} value={"restaurant"}>
                Restaurant
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center  w-[125px] lg:rounded-r-full p-4 bg-opacity-25 bg-white hover:bg-secondary hover:bg-opacity-100 transition-all ease-in delay-100 ">
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.162 7.83496H19.287V19.5225C19.287 21.4561 17.7402 22.96 15.8495 22.96H3.47454C1.54094 22.96 0.0370369 21.4561 0.0370369 19.5225V7.83496H4.16204V6.45996C4.16204 3.45215 6.61126 0.959961 9.66204 0.959961C12.6698 0.959961 15.162 3.45215 15.162 6.45996V7.83496ZM6.91204 6.45996V7.83496H12.412V6.45996C12.412 4.95605 11.1659 3.70996 9.66204 3.70996C8.11516 3.70996 6.91204 4.95605 6.91204 6.45996ZM13.787 11.6162C14.3456 11.6162 14.8183 11.1865 14.8183 10.585C14.8183 10.0264 14.3456 9.55371 13.787 9.55371C13.1855 9.55371 12.7558 10.0264 12.7558 10.585C12.7558 11.1865 13.1855 11.6162 13.787 11.6162ZM5.53704 11.6162C6.09563 11.6162 6.56829 11.1865 6.56829 10.585C6.56829 10.0264 6.09563 9.55371 5.53704 9.55371C4.93547 9.55371 4.50579 10.0264 4.50579 10.585C4.50579 11.1865 4.93547 11.6162 5.53704 11.6162Z"
                fill="white"
              />
            </svg>
            <Link to="/searched">
              <button onClick={handleCatagButton} value={"shopping"}>
                Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <h1 className="text-4xl text-center font-bold mb-4">
          Happening Cities
        </h1>
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-center items-center">
          <HomeHoverImage
            name={"London"}
            image="/Images/london.jpeg"
            index={"z-0"}
          />
          <HomeHoverImage
            name={"Birmingham"}
            image="/Images/birmingham.jpeg"
            index={"z-10"}
          />
          <HomeHoverImage
            name={"Manchester"}
            image="/Images/manchester.jpeg"
            index={"z-0"}
          />
        </div>
        <h1 className="text-3xl font-bold text-center mt-[75px] mb-2">
          Exclusive & Popular
        </h1>
        <h2 className="text-sm text-primary-100 text-center">
          A guide to the most sought-after and traveler-approved destinations.
        </h2>

        <div className="flex flex-col lg:flex-row justify-evenly items-center my-5 space-y-4 lg:space-y-0">
          <EandPcard
            name={"Shoreline Village"}
            image={"/Images/restrauant.jpeg"}
            rating={4}
            reviews={1}
            pricing={3}
            type={"Restaurant"}
            place={"London"}
            phone_number={"97517604640"}
          />
          <EandPcard
            name={"Shoreline Village"}
            image={"/Images/bakery.jpeg"}
            rating={3.5}
            reviews={4}
            pricing={2}
            type={"Restaurant"}
            place={"London"}
            phone_number={"97517604640"}
          />
          <EandPcard
            name={"Shoreline Village"}
            image={"/Images/restrauant.jpeg"}
            rating={4}
            reviews={1}
            pricing={1}
            type={"Restaurant"}
            place={"London"}
            phone_number={"97517604640"}
          />
        </div>

        {/* <SimpleSlider/> */}
        <div className="h-[350px] w-[90vw] main_background rounded-lg background-tint mx-auto p-4 my-5 flex flex-col justify-center items-start lg:pl-20">
          <div className="">
            <h1 className="text-2xl font-extrabold text-white ">
              Are You a Local Business?
            </h1>
            <p className="text-xl text-white font-light">
              Join the community of hundreds of flourishing local business in
              your city.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-secondary text-white rounded-md py-2 px-3 mt-2 border-2">
              Get Started
            </button>
            <button className="bg-white text-secondary rounded-md p-2 mt-2 ml-2 border-2 border-primary">
              Claim Your Business
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

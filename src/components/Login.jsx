import React, { useState } from "react";

const SignInModal = ({ setOpen, open }) => {
  //---------------naman_add_ons------------------
  const api_string = "https://linkuplocal.onrender.com/Users/api";
  //when trying in production change traget to https://linkuplocal.onrender.com/Users/api

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value });
  };

  const loginUser = async () => {
    try {
      const response = await fetch(`${api_string}/login_user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("POST request successful:", result);
    } catch (error) {
      console.error("Error during POST request:", error.message);
    }
  };

  //----------------------------------------------

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center pb-3 w-[500px]">
          <p className="text-2xl font-bold">Sign in</p>
          <div
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            x
          </div>
        </div>
        <form method="POST">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username or Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="email"
              placeholder="Username or Email"
              value={userLogin.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              value={userLogin.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-secondary hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={loginUser}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-secondary hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;

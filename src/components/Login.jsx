import React, { useState } from "react";

export default function SignInModal({ setOpen, open }) {
  const api_string = "https://linkuplocal.onrender.com/Users/api";

  const [login, SetLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [userSignup, setUserSignup] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setUserSignup({ ...userSignup, [name]: value });
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
    }  };

  const registerUser = async () => {
    // Implementation of registerUser
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {login ? (
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
          <p className="inline-block align-baseline font-bold text-sm text-secondary hover:text-blue-800 mb-3" onClick={()=>{SetLogin(false)}}> Already have an account? Login </p>

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
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
 <div className="flex justify-between items-center pb-3 w-[500px]">
    <p className="text-2xl font-bold">Sign Up</p>
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
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        value={userSignup.name}
        onChange={handleSignUpChange}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={userSignup.email}
        onChange={handleSignUpChange}
      />
    </div>
    <div className="mb-4">
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
        placeholder="Password"
        value={userSignup.password}
        onChange={handleSignUpChange}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="confirmPassword"
      >
        Confirm Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={userSignup.confirmPassword}
        onChange={handleSignUpChange}
      />
    </div>
    <div>
      <p className="text-secondary inline-block align-baseline font-bold text-sm hover:text-blue-800 mb-3" 
      onClick={()=>{SetLogin(true)}}> Have you already registered? </p>
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-secondary hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={registerUser}
      >
        Sign Up
      </button>
      <a
        className="inline-block align-baseline font-bold text-sm text-secondary hover:text-blue-800"
        href="#"
      >
        Already have an account?
      </a>
    </div>
  </form>
        </div>
      )}
    </div>
  );
}

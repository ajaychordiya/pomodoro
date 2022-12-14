import React from "react";
import useForm from "../custom-hook/useForm";
import { Link } from "react-router-dom";
import axios from "axios";

const Loin = () => {
  const [value, handleChange] = useForm({ userid: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://pomodoro-env.eba-p7tpqkyg.ap-south-1.elasticbeanstalk.com/userLogin`,
        value
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    console.log(value);
  };
  return (
    <div className="w-2/3 mx-auto mt-10 rounded-md border border-transparent  py-3 bg-gradient-to-r  from-cyan-400 to-blue-400">
      <h1 className="text-3xl font-bold text-center mt-7">Login</h1>

      <form onSubmit={handleSubmit} className=" mx-auto w-72">
        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-gray-700 mt-8"
        >
          Email address
        </label>
        <input
          type="text"
          name="userid"
          id="email-address"
          value={value.userid}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border py-2 px-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />

        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mt-3"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={value.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border py-2 px-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />

        <div className=" px-4 py-3 text-center sm:px-6">
          <button
            type="submit"
            className="mx-auto  rounded-md border border-transparent w-36 mt-4 bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">or</div>

      <div className=" px-4 py-1 text-center mb-4 sm:px-6">
        <Link to="/signup">
          <button className="mx-auto rounded-md border border-transparent w-36 mt-4 bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Loin;

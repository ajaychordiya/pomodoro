import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="py-3 px-2 flex justify-between ">
      <Link to="/">
        <h1 className="font-serif font-extrabold">Pomodoro</h1>
      </Link>

      <div className=" flex justify-between">
        <Link to="/dashboard">
          <button className="">Reports</button>
        </Link>
        <Link to="/login">
          <button className="ml-10 sm:ml-4">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

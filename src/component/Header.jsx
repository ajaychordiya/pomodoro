import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="py-10 px-10 flex justify-between ">
      <h1>Pomodoro</h1>

      <Link to="/login">
        <button className="">Login</button>
      </Link>
    </div>
  );
};

export default Header;

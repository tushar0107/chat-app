import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
//   const user = useSelector((state)=>state.user.value);
  return (
      <div id="header">
        <div className="logo">
          Name
        </div>
        <nav>
          <Link to={"/profile"}>Profile</Link>
        </nav>
      </div>
  );
};

export default Header;
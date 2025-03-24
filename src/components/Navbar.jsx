import React from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  console.log(assets.logo);
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <img src={assets.logo} className="w-36" alt="Logo" />
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/surajlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between pt-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-10" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/suraj-raikar-589bb9235/">
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/Surajaraikar">
          {" "}
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

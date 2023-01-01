import React from "react";
import { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
const Nav = () => {
  const [active,setActive]= useState("home");
  const [toggle, settoggle] = useState(false);
  return (
    <nav className=" w-full flex py-6  px-3 justify-between items-center navbar">
      <img src={logo} alt="Hookbank" className="w-[124px] h-[32px]" />
      <ul
        className={`list-none sm:flex  hidden  justify-end text-white  items-center flex-1`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-base tracking-wide ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            } cursor-pointer ${
              active===nav.title?"text-white":"text-dimWhite"
            }`}
              onClick={()=> setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1  justify-end items-start ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
        <di
          className={`${
            toggle ? `flex` : `hidden`
          } absolute bg-black-gradient top-16 mx-4 p-6 my-2 min-w-[140px]  rounded-xl sidebar`}>
          <ul
            className={`list-none sm:flex   flex-1 justify-center text-white  items-center`}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } cursor-pointer ${
                  active===nav.title?"text-white":"text-dimWhite"
                }`}
                  onClick={()=> setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </di>
      </div>
    </nav>
  );
};

export default Nav;

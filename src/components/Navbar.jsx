import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("/");
  const navigate = useNavigate();
  const navItems = [
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Register",
      link: "/register",
    },
  ];

  return (
    <div className="flex w-full h-16 border border-b justify-between items-center">
      <div className="flex w-[80%] h-full justify-between items-center mx-auto ">
        <p
          className="text-3xl text-primary hover:text-primary hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Make You Up
        </p>

        {navItems.map((item) => {
          return (
            <div className=" flex hover:cursor-pointer text-lg font-medium">
              <p
                className={`${activePage === item.link && " text-primary "}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.link);
                  navigate(item.link);
                }}
              >
                {item.title}
              </p>
            </div>
          );
        })}
        <BsCart4
          className="hover:text-primary"
          size={20}
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
        />
        <BiShoppingBag
          className="hover:text-primary"
          size={20}
          onClick={(e) => {
            e.preventDefault();
            navigate("/order");
          }}
        />

        <input
          className="border border-gray-400 px-1 py-2 bg-gray-100 rounded-md"
          type="text"
          placeholder="Search on Nykaa"
        />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let user = useSelector((state) => state.user.user);
  console.log("user:", user);
  const [activePage, setActivePage] = useState("/");
  const navigate = useNavigate();
  const navItems = [
    {
      title: "Explore",
      link: "/productlist",
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
      <div className="flex w-[70%] h-full justify-between items-center mx-auto ">
        <p
          className="text-3xl text-primary hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Make You Up
        </p>
        <p>{user.name}</p>

        <input
          className="border border-gray-400 p-1 bg-slate-50 rounded-md"
          type="text"
          placeholder="Search on Nykaa"
        />
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
      </div>
    </div>
  );
};

export default Navbar;

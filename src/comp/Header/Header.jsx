import React, { useEffect, useState } from "react";
import Cart from "../../assets/icon-cart.svg?react";
import Avatar from "../../assets/image-avatar.png?react";
import Shop from "../Cart/Shop";

const Header = ({ logo, cart, result, clear }) => {
  const [showChart, setShowChart] = useState(false);

  const clickChart = () => {
    setShowChart(!showChart);
  };
  return (
    <>
      <div className="flex flex-row  w-full h-[80px] border-b-2 border-Darkgrayishblue items-center px-0 text-Darkgrayishblue">
        <div className="basis-logo">{logo}</div>
        <div className="basis-menu">
          <ul className="flex w-full  items-center">
            <li className="mx-2 h-[80px] flex items-center  hover:border-b-4 border-orange cursor-pointer">
              Collections
            </li>
            <li className="mx-2 h-[80px] flex items-center  hover:border-b-4 border-orange cursor-pointer">
              Men
            </li>
            <li className="mx-2 flex items-center  hover:border-b-4 border-orange cursor-pointer">
              {" "}
              Women
            </li>
            <li className="mx-2 flex items-center  hover:border-b-4 border-orange cursor-pointer">
              About
            </li>
            <li className="mx-2 flex items-center  hover:border-b-4 border-orange cursor-pointer">
              Contact
            </li>
          </ul>{" "}
        </div>
        <div className="basis-cart flex justify-end ">
          <div
            id="cart"
            className="mr-4 flex items-center cursor-pointer"
            onClick={clickChart}
          >
            <Cart />
            <div
              id="num"
              className=" h-4 w-4 rounded-[4px] mt-[-20px] ml-[-10px] bg-orange text-cart flex items-center justify-center text-white"
            >
              {cart}
            </div>{" "}
          </div>
          <div id="user">
            <img src={Avatar} alt="" className="h-10 w-10" />
          </div>
        </div>
      </div>
      {showChart && <Shop price={result} qty={cart} clear={clear} />}
    </>
  );
};

export default Header;

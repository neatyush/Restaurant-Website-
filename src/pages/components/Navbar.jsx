import React, { useState } from "react";
import menuLogo from "../../assets/menu-icon.svg";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  return (
    <>
      {/* Mobile Logo Section Start */}
      <div className="w-full m-0 bg-[#ffffff] flex flex-row justify-between p-6 ">
        {/*Logo */}
        <header>
          <div className="logo-section">
            <h1 className="p-0 m-0 text-[#333333] font-bold text-3xl md:text-4xl lg:hidden">
              GAUNGHAR
            </h1>

            <span className="text-bold text-[14px] md:text-xl lg:hidden">
              Restaurant
            </span>
          </div>
        </header>
        {/* Mobile logo section ends  */}

        {/* 3 dot menu for Small Screen-*/}
        <button>
          <img
            src={menuLogo}
            className=" lg:hidden "
            alt="menu"
            onClick={() => setMenuClick(true)}
          />
        </button>
      </div>
    {/* Mobile Section Ends Here */}

      {/* Mobile Menu Conditionally Rendered */}
      {menuClick && (
        <div
          className="wrapper h-full right-0 top-0 box-border z-10 bg-[#111] fixed overflow-x-hidden text-[#999]
          p-4 w-72
          "
        >
          {/* Menu Close Button */}
          <div className="flex justify-end ">
            <button
              className="hover:text-white font-extrabold mb-4"
              onClick={() => setMenuClick(false)}
            >
              X
            </button>
          </div>
          {/* Menu Close Button Ends Here */}

          {/* Three Dot Mobile Menu Ends  */}
          <div className="flex flex-col justify-around gap-6">
            <ul
              className="text-2xl font-semibold cursor-pointer
        flex flex-col gap-2 p-3"
            >
              <li className="hover:text-white">Home</li>
              <li className="hover:text-white">About Us</li>
              <li className="hover:text-white">Menus</li>
              <li className="hover:text-white">Gallery</li>
              <li className="hover:text-white">Honest Reviews</li>
              <li className="hover:text-white">Find Us</li>
            </ul>
            <button className="border-[#999] text-sm border-2 p-2 hover:border-white hover:text-white">
              Reservation
            </button>
          </div>
        </div>
      )}
      {/* Three Dot Mobile Menu Ends */}

      {/* Logo Section for Large Screen- Hide On Small */}
      <div className="logoBar hidden lg:flex flex-col items-center justify-center mb-4">
        <div className="flex flex-col text-center">
          <h1 className="p-0 m-0 text-[#080808] font-bold text-5xl ">
            GAUNGHAR
          </h1>

          <span className="text-bold text-xl ">Restaurant</span>
        </div>
      </div>
      {/* Logo Section for Large Screen Ends Here*/}

      {/* Navigation Bar on Large Screen Starts Here */}
      <nav className="navBar hidden lg:flex flex-col items-center justify-center mb-5">
        <div className="flex justify-around gap-6">
          {/* fixed top-0 left-0 w-full bg-white z-50 shadow p-4 */}
          <ul
            className="text-[15px] font-semibold cursor-pointer
        flex flex-row gap-10 p-3"
          >
            <li className="hover:text-[#cfa617]">Home</li>
            <li className="hover:text-[#cfa617]">About Us</li>
            <li className="hover:text-[#cfa617]">Menus</li>
            <li className="hover:text-[#cfa617]">Gallery</li>
            <li className="hover:text-[#cfa617]">Honest Reviews</li>
            <li className="hover:text-[#cfa617]">Find Us</li>
          </ul>
          <button className="border-[#333] text-sm border-2 rounded-md p-2 hover:border-[#cfa617] hover:bg-[#cfa717bb] hover:text-white font-bold">
            Reservation
          </button>
        </div>
      </nav>
      {/* Navigation Bar Ends Here */}
    </>
  );
};

export default Navbar;

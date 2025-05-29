import React from "react";
// import fbLogo from "../../assets/facebook.svg";
import mailIcon from "../../assets/images/mail.svg"
import phoneIcon from "../../assets/images/phoneicon.svg"
import externalIcon from "../../assets/images/external.svg";
import locationIcon from "../../assets/images/location.svg";


const Foooter = () => {
  return (
    <>
    <footer className="wrapper bg-black text-gray-200 p-8 lg:flex lg:flex-row lg:gap-8 lg:justify-evenly lg:items-start">
      {/* Restaurant Logo */}
      <div className="logo-section">
        <div>
          <h1 className="p-0 m-0 text-white font-bold text-4xl md:text-5xl lg:7xl">
            GAUNGHAR
          </h1>

          <span className="text-bold font-semibold text-xl md:text-xl lg:2xl">
            Restaurant{" "}
            <sub className="font-kristi text-red-500 text-xl">Anamnagar</sub>
          </span>
        </div>
        {/* ----------Description---------- */}
        <div className="description pt-4">
          <p className="text-base">
            Local, lovable, and loaded with flavor — that’s Gaun Ghar!
          </p>
        </div>
        {/* ----------Social Media Links---------- */}
        {/* <div className="description pt-4">
          <img src={instaLogo} alt="Gaunghar facebook" />
          <img src={fbLogo} alt="Gaunghar facebook" />
        </div> */}
 

      </div>
      {/* Overview */}
      <div  className="mt-8" id="findus">
           
        <h1 className="text-xl font-bold">Overview</h1>
        <div className="flex flex-col gap-2">
        <p className="text-base flex flex-row gap-2 mt-2">
                Home
          </p>
           <p className="text-base flex flex-row gap-2">
             Food Menu
          </p>
           <p className="text-base flex flex-row gap-2">
            About Us
          </p>
          </div>
      </div>
      {/* Contact Info */}
      <div  className="mt-8" id="findus">
           
        <h1 className="text-xl font-bold">Contact Info</h1>
        <div className="flex flex-col gap-2">
        <p className="text-base flex flex-row gap-2 mt-2">
           <img src={mailIcon} alt=""/>  gaunghar@gmail.com
          </p>
           <p className="text-base flex flex-row gap-2">
             <img src={phoneIcon} alt="" /> 9812XXXXXX
          </p>
           <p className="text-base flex flex-row gap-2">
            <img src={externalIcon} alt="" /> www.gaunghar.com.np
          </p>
          </div>
      </div>
      {/* location */}
       <div  className="mt-8">
           
        <h1 className="text-xl font-bold">Location</h1>
        <div className="flex flex-col gap-4">
        <p className="text-base flex flex-row mt-2">
           <img src={locationIcon} alt=""/>  Anamnagar, 5 m ahed of Anamnagar Bridge
          </p>

          </div>
      </div>
    </footer>
    </>
  );
};

export default Foooter;

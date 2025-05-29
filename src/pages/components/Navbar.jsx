import React, { useState } from "react";
import menuLogo from "../../assets/menu-icon.svg";
import { useForm } from "react-hook-form";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Reservation Data:", data);
    setShowReservationForm(false); // Close modal on success
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="sticky top-0 z-30 lg:hidden">
        <div className="flex justify-between p-6 items-center bg-white h-20 shadow-sm">
          <header>
            <h1 className="text-[#333] font-bold text-2xl">GAUNGHAR</h1>
            <span className="text-sm font-semibold">
              Restaurant <sub className="font-kristi text-red-500 text-lg">Anamnagar</sub>
            </span>
          </header>
          <button onClick={() => setMenuClick(true)}>
            <img src={menuLogo} alt="menu" className="lg:hidden" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuClick && (
        <div className="fixed top-0 right-0 w-72 h-full bg-[#111] text-[#999] p-4 z-40">
          <div className="flex justify-end">
            <button className="hover:text-white font-extrabold mb-4" onClick={() => setMenuClick(false)}>
              X
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-2xl font-semibold">
            <a href="#home" className="hover:text-[#cfa617]">Home</a>
            <a href="#aboutus" className="hover:text-[#cfa617]">About Us</a>
            <a href="#menu" className="hover:text-[#cfa617]">Menu</a>
            <a href="#gallery" className="hover:text-[#cfa617]">Gallery</a>
            <a href="#review" className="hover:text-[#cfa617]">Reviews</a>
            <a href="#findus" className="hover:text-[#cfa617]">Find Us</a>
          </ul>
          <button
            className="border-[#999] text-sm border-2 mt-6 p-2 hover:border-white hover:text-white"
            onClick={() => setShowReservationForm(true)}
          >
            Reservation
          </button>
        </div>
      )}

      {/* Reservation Modal */}
      {showReservationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowReservationForm(false)}
              className="absolute top-2 right-4 text-black font-bold"
            >
              ×
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
              <label htmlFor="name" className="font-semibold">Name</label>
              <input id="name" {...register("name", { required: "Name is required" })} className="border px-3 py-2 rounded" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <label htmlFor="bookingDate" className="font-semibold">Booking Date</label>
              <input type="date" id="bookingDate" {...register("bookingDate", { required: "Date is required" })} className="border px-3 py-2 rounded" />
              {errors.bookingDate && <p className="text-red-500 text-sm">{errors.bookingDate.message}</p>}

              <label htmlFor="bookingTime" className="font-semibold">Booking Time</label>
              <input type="time" id="bookingTime" {...register("bookingTime", { required: "Time is required" })} className="border px-3 py-2 rounded" />
              {errors.bookingTime && <p className="text-red-500 text-sm">{errors.bookingTime.message}</p>}

              <label htmlFor="pax" className="font-semibold">Number of Guests</label>
              <input type="number" id="pax" {...register("pax", { required: "Guests required", min: 1 })} className="border px-3 py-2 rounded" />
              {errors.pax && <p className="text-red-500 text-sm">{errors.pax.message}</p>}

              <button type="submit"
               onClick={() => setShowReservationForm(true)} 
               className="bg-[#cfa617] hover:bg-[#b89315] text-white font-bold py-2 rounded mt-2">
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Desktop Nav */}
      <div className="hidden lg:flex flex-col items-center mt-10 mb-5">
        <h1 className="text-5xl font-bold text-[#080808]">GAUNGHAR</h1>
        <span className="text-xl">
          Restaurant <sub className="font-kristi text-red-500 text-2xl">Anamnagar</sub>
        </span>
      </div>

      <nav className="hidden lg:flex justify-center sticky top-0 z-20 bg-white h-20 shadow-sm items-center">
        <ul className="flex gap-10 text-sm font-semibold">
          <a href="#home" className="hover:text-[#cfa617]">Home</a>
          <a href="#aboutus" className="hover:text-[#cfa617]">About Us</a>
          <a href="#menu" className="hover:text-[#cfa617]">Menu</a>
          <a href="#gallery" className="hover:text-[#cfa617]">Gallery</a>
          <a href="#review" className="hover:text-[#cfa617]">Reviews</a>
          <a href="#findus" className="hover:text-[#cfa617]">Find Us</a>
          <button
            onClick={() => setShowReservationForm(true)}
            className="border-[#333] text-sm border-2 rounded-md px-4 py-2 hover:border-[#cfa617] hover:bg-[#cfa717bb] hover:text-white font-bold"
          >
            Reservation
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

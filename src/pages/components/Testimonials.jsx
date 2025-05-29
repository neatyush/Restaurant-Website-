import React from "react";
import ambi from "../../assets/images/ambi1.jpg";
import googleReivew from "../../assets/images/googleratings.png";

const Testimonials = () => {
  const review = `"We had an amazing party last night. Everyone loved the sekuwa and momo was so juicy. Worth every rupees"`;
  const reviewerName = "Rajesh Nepali";
  return (
    <>
      <div className="relative w-full min-h-[550px] bg-opacity-70 mt-12 "  id="review">
        {/* Background Image */}
        <img
          src={ambi}
          alt="Delicious food"
          className="w-full h-[550px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center gap-6 justify-center text-center text-white  px-4">
          <p className="font-kristi text-5xl">Customer</p>

          {/* Review Card */}
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7x shadow-lg">
            Testimonial
          </h1>
          <div className=" bg-white p-9 max-w-lg rounded-md flex flex-col gap-5 items-center "> 
            <p className="text-lg bg-white text-black font-medium">{review}</p>
            <p className="text-lg bg-white text-black font-bold">
              {reviewerName}
            </p>
            <img
              src={googleReivew}
              className="max-w-40 object-cover"
              alt="Gaunghar ratings"
            />
          </div>
        </div>
      </div>

      {/* contact section */}
      <div className="wrapper mt-8 mb-8 lg:flex lg:flex-row ">
      <div className="flex flex-col items-start  gap-4 p-8 lg:ml-12">
        <h1 className="text-3xl text-[#222222] font-bold tracking-tighter">
          Contact Us
        </h1>
        <p className="text-xl text-[#222222] tracking-tighter">Anamnagar, Kathmandu</p>
        <h1 className="text-xl text-[#222222] tracking-tighter">
          Tel: 01-55555 Mobile: 9812XXXXXX
        </h1>
      </div>

      {/* OPENINNG HOUR */}
      <div className="flex flex-col items-start gap-4 p-8 lg:ml-48">
        <h1 className="text-3xl text-[#222222] font-bold tracking-tighter">
          Opening Hours
        </h1>

        <h1 className="text-xl text-[#222222] tracking-tighter">
          Open 365 days
        </h1>

        <h1 className="text-xl text-[#222222]  tracking-tighter">
          8:30am - 10:00pm
        </h1>
      </div>
       </div>
    </>
  );
};

export default Testimonials;

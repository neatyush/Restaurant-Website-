  import React from 'react'
  import heroImage from "../../assets/menu/mains.jpg";
  import { motion } from "framer-motion";

  const HeroSection = () => {
    return (

      <motion.div
   initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}  className="relative w-full min-h-[550px] bg-opacity-70" id="home">
              {/* Background Image */}
              <img
                src={heroImage}
                alt="Delicious food"
                className="w-full h-[550px] object-cover"
              />
      
              {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      
              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col items-center gap-6 justify-center text-center text-white  px-4">
                <p className="font-kristi text-5xl">Welcome to</p>
                <h1 className="text-7xl font-bold md:text-8xl lg:text-9xl">Gaunghar</h1>
                <p className="text-lg mt-4">
                  Where taste meets tradition
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white font-semibold">
                  Reserve a Table
                </button>
              </div>
          
            </motion.div>
    )
  }

  export default HeroSection
import momo from "../../assets/menu/momo.jpg";
import mains from "../../assets/menu/mains.jpg";
import dhaka from "../../assets/images/dhaka.png";
import heroImage from "../../assets/menu/full.jpg";
 import { motion } from "framer-motion";


const MenuShowCase = () => {
  const companyMotto =
    "GAUNGHAR IS A CASUAL YET ELEGANT RESTAURANT, SERVING AUTHENTIC NEPALI";
  const founderName = "Siddhartha Manandhar";
  const ourStory = `Every dish at Gaun Ghar is a tribute to our villages, our families,
            and our culture. Whether it’s a simple daal-bhaat or a slow-cooked
            goat curry, we cook it with patience, love, and a promise to keep
            the tradition alive.`;
  return (
    <>
      {/* Restaurant Moto */}
      <motion.div className="ourMotto mb-20" id="aboutus"  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}        
  exit={{ opacity: 0, y: -50 }}              
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}>    
      <div className="flex flex-col items-center p-14 mt-4 mb-2 gap-4">
        <h2 className="text-3xl font-semibold text-justify w-[350px] lg:max-w-[700px]">
          {companyMotto}
        </h2>
        <h3 className="text-s text-center">Our Founder {founderName}</h3>
        <p className="font-kristi text-4xl mt-4 text-red-500">{founderName}</p>
      </div>

      {/* Menu Item Images */}
      <div className="grid grid-cols-2 p-8 gap-5 lg:grid-cols-3">
        {/* <div className="grid grid-cols-2 p-8 gap-5 lg:grid-cols-3"> */}

        {/* Food Images */}
        <img src={momo} className="rounded-lg" alt="Momo at Gaunghar" />
        <img src={mains} className="rounded-lg" alt="Thakali at gaunghar" />

        <div className="mb-view flex ml-auto mr-auto">
        {/* Our Story Section */}
        <div className="card rounded-xl shadow-2xl flex flex-col box-border p-6 gap-4 min-w-64 lg:-translate-y-20 lg:h-96 ">
          <h3 className="font-kristi text-3xl text-[#cfa670] font-semibold">
            Discover
          </h3>
          <p className="text-5xl text-[#222222] font-bold tracking-tighter">
            OUR STORY
          </p>
          <img src={dhaka} className="size-8" alt="" />
          <p className="text-sm text-[#222222] tracking-tighter lg:text-base ">
           {ourStory}
          </p>
        </div>
        </div>
      </div>
      </motion.div>
{/* ---------------------------------------------------------------------------------------- */}
      {/* Chef Recommendation Section */}
      <div className="relative w-full min-h-[250px] bg-opacity-70 p-14 bg-green-600 mb-20">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Delicious food"
          className="w-full h-[250px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Centered Text */}

        <div className="absolute inset-0 flex flex-col items-center gap-6 justify-center text-center text-white px-4">
          <p className="font-kristi text-5xl text-[#cfa670]">Our Chef</p>
          <h1 className="text-4xl font-bold tracking-tighter md:text-4xl lg:text-6xl ">
            RECOMMENDATION
          </h1>
        </div>
      </div>
    </>
  );
};

export default MenuShowCase;

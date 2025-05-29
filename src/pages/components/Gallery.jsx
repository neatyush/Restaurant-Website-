import React from 'react'
import flower from "../../assets/images/flower.png";
import thakali from "../../assets/images/thakali.jpg";
import choila from "../../assets/images/choila.jpg";
import sekuwa from "../../assets/images/sekuwa.jpg";
import wings from "../../assets/images/wings.jpg";
import burger  from "../../assets/images/burger.jpg";
import salad from "../../assets/images/salad.jpg";






const Gallery = () => {
  return (
    <>
    <div id="gallery" initial={{ opacity: 0, y: 50 }}             
  whileInView={{ opacity: 1, y: 0 }}       
  exit={{ opacity: 0, y: -50 }}               
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }} >
      {/* Gallery Title */}
      <div className='flex flex-col justify-center items-center mt-14'>
         <h3 className="font-kristi text-4xl text-[#cfa670] font-semibold">
            Image
          </h3>
            <p className="text-5xl text-[#222222] font-bold tracking-tighter">
            Gallery
          </p>
          <img src={flower} className="size-8" alt="" />
          </div>
        
        <div className='grid grid-cols-2 gap-16 p-8 place-items-center items-center mt-12 md:grid md:grid-cols-2 md:place-items-center md:gap-20  lg:grid lg:grid-cols-4 lg:place-items-center lg:gap-20'>

            <img src={thakali} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
            <img src={choila} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
            <img src={sekuwa} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
             <img src={thakali} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
            <img src={wings} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
             <img src={burger} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
             <img src={salad} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
            <img src={thakali} alt="GaunGhar Menu" 
            className='h-[300px] w-[320px] object-cover rounded-md overflow-hidden transition delay-110 duration-300 ease-in hover:-translate-y-1 hover:scale-110'/>
           
           
            
            
            
            
        </div>
    </div>
    </>
  )
}

export default Gallery
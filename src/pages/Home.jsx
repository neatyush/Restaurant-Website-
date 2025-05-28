import Navbar from './components/navbar'
import heroImage from "../assets/hero-image.jpg";
import "../index.css";




const Home = () => {
  return (
 <>
 <Navbar></Navbar>
 {/* pass a scroll position, if scrolled by 20-70 px make the nav bar stick on top 0 , and 
 then add a trasparency to the backgrouhnd
  */}
  <div>
    <img src={heroImage} alt="" 
    className='w-full h-[550px] object-fit'/>
  </div>
   <div>
    <img src={heroImage} alt="" 
    className='w-full h-[550px] object-fit'/>
  </div>
 </>
  )
}

export default Home
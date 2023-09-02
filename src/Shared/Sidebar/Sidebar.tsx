import { Link } from "react-router-dom"; 
import { GrHomeRounded } from "react-icons/gr";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsFillPieChartFill } from "react-icons/bs"; 
import { FiMapPin } from "react-icons/fi";

import CustomLinks from './../CustomLinks/CustomLinks';

 
 

const Sidebar = () => {
  
  return (
    <div className="bg-[#fff] h-[100%] grid content-between lg:fixed">
      <div>
      <div className="">
        <Link to="/" className="logo">
          <h3 className="mt-3 text-lg"><b>Taiyo</b></h3>
        </Link> 
      </div>

      <div className="mt-7 content-between h-[120%] grid">
        <div className="gap-2">
        <CustomLinks to="/">
       <GrHomeRounded color="white"/> 
         </CustomLinks>
        <CustomLinks to="contact">
          <RiContactsBook2Fill color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="chart">
         <BsFillPieChartFill color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="map">
         <FiMapPin color="#B6B6B6"/>
         </CustomLinks>
        </div>
        
      </div>

      </div>
 
    </div>
  )
}

export default Sidebar
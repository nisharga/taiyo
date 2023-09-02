 
import { GrHomeRounded } from "react-icons/gr";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsFillPieChartFill } from "react-icons/bs"; 
import { FiMapPin } from "react-icons/fi";

import CustomLinks from "../CustomLinks/CustomLinks";
const BottomBar = () => {
  return (
    <div className="fixed bottom-0 right-0 mt-4 md:hidden bg-[#306793] w-[100%]">
        <div className="flex justify-center">
        <CustomLinks to="/">
         <GrHomeRounded color="#B6B6B6"/>
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
  )
}

export default BottomBar
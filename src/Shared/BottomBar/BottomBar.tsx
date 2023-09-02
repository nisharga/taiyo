 
import { GrHomeRounded } from "react-icons/gr";
import { RiProfileLine } from "react-icons/ri";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import CustomLinks from "../CustomLinks/CustomLinks";
const BottomBar = () => {
  return (
    <div className="fixed bottom-0 right-0 mt-4 md:hidden bg-slate-50 w-[100%]">
        <div className="flex justify-center">
        <CustomLinks to="/">
         <GrHomeRounded color="white"/>
         </CustomLinks>
        <CustomLinks to="analisis">
          <RiProfileLine color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="overview">
         <CgProfile color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="profile">
         <BsCardList color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="search">
            <FaSearch color="#B6B6B6"/>
         </CustomLinks>
        </div>
    </div>
  )
}

export default BottomBar
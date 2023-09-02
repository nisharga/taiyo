import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { RiProfileLine } from "react-icons/ri";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";
import CustomLinks from './../CustomLinks/CustomLinks';

 
 

const Sidebar = () => {
  
  return (
    <div className="bg-[#ffffff] h-[100%] grid content-between lg:fixed">
      <div>
      <div className="">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <Link to="/">
          <div className="p-4">
            <FaSearch color="#B6B6B6"/>
          </div>
        </Link>
      </div>

      <div className="mt-7 content-between h-[120%] grid">
        <div className="gap-2">
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
        </div>
        <div className="">
        <Link to="">
        <div className="p-4"> 
          <GrNotification/>
        </div>
        </Link>
        <Link to="">
        <div className="p-4"> 
          <TbLogout/>
          </div> 
        </Link>
        </div>
      </div>

      </div>
 
    </div>
  )
}

export default Sidebar
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";
import BottomBar from "../Shared/BottomBar/BottomBar";
const Main = () => {
  return (
    <>
    <div className="container mx-auto flex">
      <div className='sidebar lg:flex-none hidden md:block'>
        <Sidebar/>
      </div>
      <div className='content_area flex-1'>
        <div><Outlet /></div>
      </div> 
    </div>
    <div className="">
      <BottomBar/>
    </div>
  </>
  )
}

export default Main
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
 import "./Navigation.css"
import { useState } from "react"
import Mobile from "../Mobile/Mobile";


const Navigation = () => {
    const [ShowMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
    <Mobile
    show={ShowMobileNav}
    setClose={() =>setShowMobileNav(false)}

    />
    
    <div className="w-full h-[80px] justify-center items-center border-b">
        <div className="container">
            <div className="flex justify-between items-center gap-4 py-3 px-4">
            <div>
                <Link to={'#'} className="inline-block w-[30px] h-[30px] bg-slate-500 rounded-full"></Link>
            </div>
            <div className="inline-block">
                    <ul className="">
                       <li className=" hidden md:flex justify-start items-center gap-4">
                        <Link to={""}>Nav1</Link>
                        <div className="DropDown cursor-pointer">
                            <span className="border py-2 px-2">DropDown</span>
                            <ul className="DropDownList w-full border  shadow-md min-w-max absolute top-7 right-0 whitespace-nowrap z-20">
                                <li className="hover:bg-blue-900 py-1 px-3"> <Link to={""}></Link>sub1</li>
                                <li className="hover:bg-blue-900 py-1 px-3"> <Link to={""}></Link>sub2 </li>
                                <li className="hover:bg-blue-900 py-1 px-3"> <Link to={""}></Link>sub3</li>
                            </ul>

                        </div>
                        <Link to={""}>Nav3</Link>
                       </li>
                        
                    </ul>
            </div>
            
            {
    ShowMobileNav ?(
        <div className=" close md:hidden border w-[30px] h-[30px]  rounded-full py-2 px-3 shadow-md bg-white cursor-pointer z-[1000] absolute top-3 right-0 ">
                <span onClick={() =>setShowMobileNav(false)}  className="w-full absolute justify-center items-center top-0 ">x</span>
            </div>
                ):<span onClick={()=>setShowMobileNav(true)} className="md:hidden border w-[30px] h-[30px] bg-slate-600 cursor-pointer z-[1000] "></span>

            }
            
            </div>

        </div>

    </div>
    </>
  )
}

export default Navigation

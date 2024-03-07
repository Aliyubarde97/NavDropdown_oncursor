/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"


interface MobileProps{
    show:boolean;
    setClose:() => void
}
const Mobile = ({show, setClose}: MobileProps) => {
    const handleClose = (ev:any) => {
        const target = ev.target as HTMLDivElement
        if(target.className.includes("mobile")){
            return setClose()
        }
        
    }

    const HandleCloseLinks = () => setClose()
    
  return (
    <>
    
        <div onClick={handleClose} className={`mobile  bg-transparent w-full h-screen ${show ? "fixed" : "hidden" } top-0 left-0 z-[1000]`}>
        <div className="w-[200px] h-screen bg-gray-500 ">
            <div className="container">
            
                    <ul className="">
                       <li  className="py-5 px-3">
                        <Link onClick={HandleCloseLinks} to={""}>Nav1</Link>
                        <div className="DropDown cursor-pointer">
                            <span className=" mb-3">DropDown</span>
                            <ul className="DropDownList w-full border  shadow-md min-w-max relative top-1 right-0 whitespace-nowrap z-20">
                                <li className="hover:bg-blue-900 py-1 px-3"> <Link onClick={HandleCloseLinks} to={""}></Link>sub1</li>
                                <li className="hover:bg-blue-900 py-1 px-3"> <Link onClick={HandleCloseLinks} to={""}></Link>sub2 </li>
                                <li className="hover:bg-blue-900 py-1 px-3"> <Link onClick={HandleCloseLinks} to={""}></Link>sub3</li>
                            </ul>

                        </div>
                        <Link onClick={HandleCloseLinks} to={""}>Nav3</Link>
                       </li>
                        
                    </ul>
            </div>
            </div>

        </div>
    
    </>
  )
}

export default Mobile
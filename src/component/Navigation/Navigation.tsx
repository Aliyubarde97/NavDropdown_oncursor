import { Link } from "react-router-dom"
 import "./Navigation.css"
const Navigation = () => {
  return (
    <>
    <div className="w-full h-[80px] justify-center items-center border-b">
        <div className="container">
            <div className="flex justify-between items-center gap-4 py-3 px-4">
            <div>
                <Link to={'#'} className="inline-block w-[30px] h-[30px] bg-slate-500 rounded-full"></Link>
            </div>
            <div className="inline-block">
                    <ul className="">
                       <li className="flex justify-start items-center gap-4">
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
            </div>

        </div>

    </div>
    </>
  )
}

export default Navigation

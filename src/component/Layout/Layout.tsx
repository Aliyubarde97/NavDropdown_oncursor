import { ReactNode } from "react"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

interface LayoutProps{
    children:ReactNode 
}

const Layout = ({children}:LayoutProps) => {
  return (
   <>

<Navigation/>
      {children}
      <Footer/>
   </>
  )
}

export default Layout

import { Children, ReactNode } from "react"
import Navigation from "./component/Navigation/Navigation";
import Footer from "./component/Footer/Footer";

interface LayoutProps{
  children:ReactNode;
}
function App() {
  

  return (
    <>
      <Navigation/>
      {Children}
      <Footer/>
      
    </>
  )
}

export default App

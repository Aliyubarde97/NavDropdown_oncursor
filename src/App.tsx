import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Layout from "./component/Layout/Layout";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout> <Home/> </Layout>}  />
        <Route path="*" element={<Navigate to={'/'}/>}  />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

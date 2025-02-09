import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import CustomCursor from "../Component/Cursor"

export const Layout = ()=>{
    return (
       <>
       <CustomCursor />
         <Header />
        <Outlet />
        <Footer />
       </>
    )
}
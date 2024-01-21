import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet  />
            {/*  <Outlet/> component (from react-router-dom ) is used within the parent route element to indicate where a child route element should be rendered */}

        </div>
    )
}



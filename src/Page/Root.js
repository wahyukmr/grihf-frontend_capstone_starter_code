import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function Root() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </>
    )
}
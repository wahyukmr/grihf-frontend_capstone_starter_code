import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Notification from '../Components/Notification/Notification';

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <Notification />
      </main>
    </>
  );
}

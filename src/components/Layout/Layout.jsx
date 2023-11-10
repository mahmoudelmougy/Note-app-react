import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isMinimized, setisMinimized] = useState(false)
  
  return (
    <>
      <div className={`d-flex min-vh-100 align-items-stretch ${style.dark}`}>
        <div className={isMinimized?`${style['sidebar-mini']}`:`${style.sidebar}`}>
          <Sidebar isMinimized={isMinimized} setisMinimized={setisMinimized}/>
        </div>

        <div className={`${style.content}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

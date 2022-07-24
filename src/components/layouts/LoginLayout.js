// import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import login1 from "../../assets/login/1.png";
import { AiOutlineDatabase, AiOutlineFile } from "react-icons/ai";
import { MdDataUsage, MdOutlineLanguage } from "react-icons/md";
// import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginLayout = ({ children, theme, setTheme }) => {
  // const [click, setClick] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex max-h-screen m-0 p-0" style={{ overflow: "hidden" }}>
      <div className="w-72 dark:bg-[#18181A] px-10 py-4 md:flex flex-col items-center justify-between hidden h-screen">
        <div className="cursor-pointer relative" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-16" />
          {theme && (
            <p className="font-bold text-2xl absolute top-4 left-[67px] whitespace-nowrap dark:text-white">
              Krauv Proxies
            </p>
          )}
        </div>

        <div className="space-y-8 dark:text-white text-sm">
          <h1 className="font-bold h4">Access Krauv Proxies Dashboard</h1>
          <div className="flex space-x-2">
            <AiOutlineDatabase size={25} />
            <p>Manage your proxy products</p>
          </div>
          <div className="flex space-x-2">
            <AiOutlineFile size={25} />
            <p>Access Documentation</p>
          </div>
          <div className="flex space-x-2">
            <MdDataUsage size={25} />
            <p>See usage statistics</p>
          </div>
        </div>
        <Link to="/">
          <div className="h-24 pt-4 border-t-[1px] border-t-[#AAAAAA] w-full flex items-center justify-center hover:underline underline-offset-1 dark:text-white cursor-pointer">
            <img src={login1} alt="icon" className="h-28 w-28 mt-2.5" />
            <p className="relative -left-4 font-bold text-sm dark:text-white">
              Exit Dashboard
            </p>
          </div>
        </Link>
      </div>
      <div className="flex-grow flex flex-col px-10 py-4 bg-[#E5E5E5] dark:bg-black relative h-screen">
        <div className="flex-1 flex flex-col items-center justify-around relative">
          {/* <button
            className="btn dark:text-white rounded-full p-2 absolute top-0 left-0 md:hidden z-10"
            onClick={() => setClick(!click)}
          >
            {click ? <RiMenu3Line size={30} /> : <RiMenu2Line size={30} />}
          </button> */}
          <div className="p-2 cursor-pointer" onClick={() => setTheme(!theme)}>
            {theme ? (
              <FaSun size={30} color="orange" />
            ) : (
              <FaMoon size={30} color="purple" />
            )}
          </div>
          <div className="">{children}</div>
          <div></div>
        </div>
        <div className="border-t-[1px] border-t-[#AAAAAA] w-full h-24 dark:text-white">
          <div className="flex justify-end items-center text-center space-x-3 mt-10">
            <p className="font-bold">Change Region</p>
            <button className="btn btn-light rounded flex space-x-2">
              <MdOutlineLanguage size={25} />
              <span>Global</span>
            </button>
          </div>
        </div>
      </div>
      {/* --- */}
      {/* {click ? (
        <div
          className={`w-80 absolute h-screen ${
            theme ? "dark:bg-[#18181A]" : "bg-white"
          } dark:text-white px-10 py-4 md:flex flex-col items-center justify-between`}
        >
          <div className="relative top-16">
            <img src={logo} alt="logo" className="h-16" />
            {theme && (
              <p className="font-bold text-2xl absolute top-4 left-[67px] whitespace-nowrap dark:text-white">
                Krauv Proxies
              </p>
            )}
          </div>
          <div className="space-y-8 absolute top-48">
            <h1 className="font-bold h4">Access Krauv Proxies Dashboard</h1>
            <div className="flex space-x-2">
              <AiOutlineDatabase size={25} />
              <p>Manage your proxy products</p>
            </div>
            <div className="flex space-x-2">
              <AiOutlineFile size={25} />
              <p>Access Documentation</p>
            </div>
            <div className="flex space-x-2">
              <MdDataUsage size={25} />
              <p>See usage statistics</p>
            </div>
          </div>
          <Link to="/">
            <div className="h-24 pt-4 border-t-[1px] border-t-[#AAAAAA] w-full flex items-center justify-center hover:underline underline-offset-1 cursor-pointer hover:text-main absolute left-0 bottom-6">
              <img src={login1} alt="icon" className="h-28 w-28 mt-2.5" />
              <p className="relative -left-4 font-bold">Exit Dashboard</p>
            </div>
          </Link>
        </div>
      ) : null} */}
    </div>
  );
};

export default LoginLayout;

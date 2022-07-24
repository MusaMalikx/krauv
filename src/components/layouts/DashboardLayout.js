import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { HiViewGrid } from "react-icons/hi";
import { GiSplitCross } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import Bullet from "../bullet/Bullet";

const DashboardLayout = ({ theme, setTheme, title, children }) => {
  const [InState, InSetState] = useState({
    in1: false,
    in2: false,
    in3: false,
    in4: false,
    in5: false,
    in6: false,
  });

  const [MyState, MySetState] = useState({
    my1: false,
    my2: false,
    my3: false,
    my4: false,
  });

  const navigate = useNavigate();

  return (
    <div
      className={`flex ${
        theme ? "dark:bg-[#18181A] dark:text-white" : "bg-white"
      } max-h-screen`}
      style={{ overflow: "hidden" }}
    >
      <div className="w-72 flex flex-col justify-around items-center h-screen">
        <div className="cursor-pointer relative" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-16" />
          {theme && (
            <p className="font-bold text-2xl absolute top-4 left-[67px] whitespace-nowrap dark:text-white">
              Krauv Proxies
            </p>
          )}
        </div>
        <div className="space-y-3">
          <div className="flex space-x-1 items-center font-bold text-lg">
            <HiViewGrid size={30} />
            <p>Overview</p>
          </div>
          <div>
            <div className="flex space-x-1 items-center font-bold text-lg">
              <GiSplitCross size={30} />
              <p>Inactive Products</p>
            </div>
            <div className="font-normal space-y-2 my-4 border-l-[1px] dark:border-l-white border-l-black pl-4 ml-9">
              <Bullet
                title="Residential Proxies"
                bool={InState.in1}
                onClick={() => {
                  InSetState({ in1: true });
                  MySetState({ my1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="Shared Datacenter Proxies"
                bool={InState.in2}
                onClick={() => {
                  InSetState({ in2: true });
                  MySetState({ my1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="Dedicated Datacenter Proxies"
                bool={InState.in3}
                onClick={() => {
                  InSetState({ in3: true });
                  MySetState({ my1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="SERP Scraper API"
                bool={InState.in4}
                onClick={() => {
                  InSetState({ in4: true });
                  MySetState({ my1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="Web Scraper API"
                bool={InState.in5}
                onClick={() => {
                  InSetState({ in5: true });
                  MySetState({ my1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="E-commerce API"
                bool={InState.in6}
                onClick={() => {
                  InSetState({ in6: true });
                  MySetState({ my1: false });
                }}
                theme={theme}
              />
            </div>
          </div>
          <div>
            <div className="flex space-x-1 items-center font-bold text-lg">
              <FiUser size={30} />
              <p>My account</p>
            </div>
            <div className="font-normal space-y-2 my-4 border-l-[1px] dark:border-l-white border-l-black pl-4 ml-9">
              <Bullet
                title="Product"
                bool={MyState.my1}
                onClick={() => {
                  MySetState({ my1: true });
                  InSetState({ in1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="Profile"
                bool={MyState.my2}
                onClick={() => {
                  MySetState({ my2: true });
                  InSetState({ in1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="Invoice"
                bool={MyState.my3}
                onClick={() => {
                  MySetState({ my3: true });
                  InSetState({ in1: false });
                }}
                theme={theme}
              />
              <Bullet
                title="Setting"
                bool={MyState.my4}
                onClick={() => {
                  MySetState({ my4: true });
                  InSetState({ in1: false });
                }}
                theme={theme}
              />
            </div>
            <div className="flex space-x-1 items-center font-bold text-lg border-t-[1px] dark:border-t-white border-t-black pt-3">
              <BiHelpCircle size={30} />
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <div />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mx-5 py-4 border-b border-b-gray-400">
          <div className="flex items-center space-x-2">
            <div className="p-2.5 shadow rounded-[500px] w-fit h-fit">
              <AiOutlineUser size={30} />
            </div>
            <p className="text-gray-500">mm******@gmail.com</p>
          </div>
          <div className="flex space-x-3 items-center">
            <div className="p-2.5 shadow rounded-[500px] w-fit h-fit">
              <MdExitToApp size={30} />
            </div>
            <div
              className="p-2 cursor-pointer"
              onClick={() => setTheme(!theme)}
            >
              {theme ? (
                <FaSun size={30} color="orange" />
              ) : (
                <FaMoon size={30} color="purple" />
              )}
            </div>
          </div>
        </div>
        <div className="h4 py-3 mx-5 font-bold border-b border-b-gray-400 mb-0">
          <p>{title}</p>
        </div>
        <div className={`${theme ? "dark:bg-black" : "bg-[#E5E5E5]"} h-full`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

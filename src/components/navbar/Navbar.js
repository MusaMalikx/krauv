import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Learn from "./nav-items/Learn";
import NavbarItem from "./NavbarItem";
import logo from "../../assets/logo/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ setTheme, theme }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#F1F3F5] text-black">
        <div className="container">
          <div className="hidden md:flex items-center justify-between p-2">
            <div className="flex items-center gap-4">
              <p>Proxy Location</p>
              <p>Network Status</p>
              <p>Careers</p>
            </div>
            <div className="flex items-center gap-4">
              <p>English(EN)</p>
              <Link to={"/dashboard/login"}>
                <p className="font-bold cursor-pointer hover:text-black">
                  Log in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-main min-h-[71px] text-black sticky top-0 filter backdrop-filter backdrop-grayscale backdrop-blur-2xl">
        <div className="container">
          <Link className="navbar-brand font-bold text-2xl" to={"/"}>
            {/* Krauv Proxies */}
            <img src={logo} alt="logo" className="h-16" />
          </Link>
          <div className="flex gap-3">
            <div
              className="m-2 cursor-pointer lg:hidden"
              onClick={() => setTheme(!theme)}
            >
              {theme ? <FaSun size={30} /> : <FaMoon size={30} />}
            </div>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto lg:flex items-center lg:ml-10 space-y-7 lg:space-y-0 lg:space-x-8 hidden">
              <NavbarItem name="Proxies">
                <button className="">heelo</button>
              </NavbarItem>
              <NavbarItem name="Scraper APIs">
                <button className="">heelo</button>
              </NavbarItem>
              <NavbarItem name="Pricing">
                <button className="">heelo</button>
              </NavbarItem>
              <NavbarItem name="Learn">
                <Learn />
              </NavbarItem>
              <div>
                <button className="text-lg">Enterprise</button>
              </div>
            </div>
            <form className="d-flex gap-2 justify-end ml-auto">
              <button className="btn bg-black text-white py-1 px-5 md:py-3 md:px-10 rounded-lg w-full whitespace-nowrap hover:text-white" onClick={() => navigate('/dashboard/register/step/2')}>
                Sign Up
              </button>
              <button className="btn border-[1px] border-black  py-3 px-7 rounded-lg w-full whitespace-nowrap">
                Talk to sales
              </button>
            </form>
          </div>
          <div
            className="m-2 cursor-pointer hidden lg:flex"
            onClick={() => setTheme(!theme)}
          >
            {theme ? <FaSun size={30} /> : <FaMoon size={30} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
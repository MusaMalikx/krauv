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
import { useSelector } from "react-redux";
import { selectValue } from "../../redux/features/dashboard/dashboardReducer";

const DashboardLayout = ({ theme, setTheme, title, children }) => {
  const value = useSelector(selectValue);
  // console.log(value);

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
                name="in1"
                title="Residential Proxies"
                bool={value.in1}
                theme={theme}
                path="/dashboard/residential-proxies"
              />
              <Bullet
                name="in2"
                title="Shared Datacenter Proxies"
                bool={value.in2}
                theme={theme}
                path="/dashboard/shared-datacenter-proxies"
              />
              <Bullet
                name="in3"
                title="Dedicated Datacenter Proxies"
                bool={value.in3}
                theme={theme}
                path="/dashboard/dedicated-datacenter-proxies"
              />
              <Bullet
                name="in4"
                title="SERP Scraper API"
                bool={value.in4}
                theme={theme}
                path="/dashboard/serp-scraper-api"
              />
              <Bullet
                name="in5"
                title="Web Scraper API"
                bool={value.in5}
                theme={theme}
                path="/dashboard/web-scraper-api"
              />
              <Bullet
                name="in6"
                title="E-commerce API"
                bool={value.in6}
                theme={theme}
                path="/dashboard/ecommerce-api"
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
                name="my1"
                title="Product"
                bool={value.my1}
                theme={theme}
                path="/dashboard/product"
              />
              <Bullet
                name="my2"
                title="Profile"
                bool={value.my2}
                theme={theme}
                path="/dashboard/residential-proxies"
              />
              <Bullet
                name="my3"
                title="Invoice"
                bool={value.my3}
                theme={theme}
                path="/dashboard/residential-proxies"
              />
              <Bullet
                name="my4"
                title="Setting"
                bool={value.my4}
                theme={theme}
                path="/dashboard/residential-proxies"
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
            <div
              className="p-2.5 shadow rounded-[500px] w-fit h-fit cursor-pointer"
              onClick={() => navigate("/dashboard/login")}
            >
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

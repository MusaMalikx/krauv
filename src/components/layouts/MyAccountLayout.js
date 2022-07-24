import React, { useEffect } from "react";
import {
  selectValue,
  setValue,
} from "../../redux/features/dashboard/dashboardReducer";
import DashboardLayout from "./DashboardLayout";
import { useSelector, useDispatch } from "react-redux";

const MyAccountLayout = ({ theme, setTheme, children }) => {
  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  useEffect(() => {
    dispatch(setValue({ name: "my1", bool: true }));
  }, []);

  return (
    <DashboardLayout theme={theme} setTheme={setTheme} title="My Account">
      <div
        className={`${
          theme ? "dark:bg-[#18181A]" : "bg-white"
        } flex px-5 pt-4 pb-2 space-x-10`}
      >
        <p
          className={`${
            value.my1 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Product
        </p>
        <p
          className={`${
            value.my2 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Profile
        </p>
        <p
          className={`${
            value.my3 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Invoice
        </p>
        <p
          className={`${
            value.my4 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Setting
        </p>
      </div>
      <div>{children}</div>
    </DashboardLayout>
  );
};

export default MyAccountLayout;

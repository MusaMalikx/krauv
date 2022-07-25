import { Tooltip, Zoom } from "@mui/material";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const NavbarItem = ({ name, theme, children }) => {
  return (
    <div className="relative">
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: theme ? "black" : "white",
              border: "1px solid #54FFBD",
              maxWidth: "1000px",
            },
          },
        }}
        TransitionComponent={Zoom}
        title={children}
      >
        <button className="flex items-center text-lg hover:underline hover:underline-offset-1">
          {name} <MdOutlineArrowDropDown size={25} />
        </button>
      </Tooltip>
    </div>
  );
};

export default NavbarItem;

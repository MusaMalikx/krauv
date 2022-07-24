import React from "react";

const Bullet = ({ title, bool, onClick, theme }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <p className="whitespace-nowrap">{title}</p>
      {bool && (
        <div
          className={`w-2 h-2 ${
            theme ? "dark:bg-white" : "bg-black"
          } rounded-full absolute top-2 -left-[20.5px]`}
        />
      )}
    </div>
  );
};

export default Bullet;

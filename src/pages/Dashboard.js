import React from "react";
import InactiveItem from "../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../components/layouts/DashboardLayout";

const Dashboard = ({ theme, setTheme }) => {
  return (
    <DashboardLayout
      title={"Choose a Product"}
      theme={theme}
      setTheme={setTheme}
    >
      <InactiveItem />
    </DashboardLayout>
  );
};

export default Dashboard;

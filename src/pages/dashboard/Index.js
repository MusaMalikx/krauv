import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const Dashboard = ({ theme, setTheme }) => {
  return (
    <DashboardLayout
      title={"Choose a Product"}
      theme={theme}
      setTheme={setTheme}
    ></DashboardLayout>
  );
};

export default Dashboard;

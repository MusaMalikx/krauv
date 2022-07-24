import React from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const ResidentialProxies = ({ theme, setTheme }) => {
  return (
    <DashboardLayout
      title="Residential Proxies"
      theme={theme}
      setTheme={setTheme}
    >
      <InactiveItem title="Residential Proxies" />
    </DashboardLayout>
  );
};

export default ResidentialProxies;

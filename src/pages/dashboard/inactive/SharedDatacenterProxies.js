import React from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const SharedDatacenterProxies = ({ theme, setTheme }) => {
  return (
    <DashboardLayout
      title="Shared Datacenter Proxies"
      theme={theme}
      setTheme={setTheme}
    >
      <InactiveItem title="Shared Datacenter Proxies" />
    </DashboardLayout>
  );
};

export default SharedDatacenterProxies;

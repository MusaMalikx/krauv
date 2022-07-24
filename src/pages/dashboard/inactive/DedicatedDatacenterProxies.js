import React from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const DedicatedDatacenterProxies = ({ theme, setTheme }) => {
  return (
    <DashboardLayout
      title="Dedicated Datacenter Proxies"
      theme={theme}
      setTheme={setTheme}
    >
      <InactiveItem title="Dedicated Datacenter Proxies" />
    </DashboardLayout>
  );
};

export default DedicatedDatacenterProxies;

import React from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const EcommerceApi = ({ theme, setTheme }) => {
  return (
    <DashboardLayout title="Ecommerce API" theme={theme} setTheme={setTheme}>
      <InactiveItem title="Ecommerce API" />
    </DashboardLayout>
  );
};

export default EcommerceApi;

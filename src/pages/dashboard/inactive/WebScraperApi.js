import React from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const WebScraperApi = ({ theme, setTheme }) => {
  return (
    <DashboardLayout title="Web Scraper API" theme={theme} setTheme={setTheme}>
      <InactiveItem title="Web Scraper API" />
    </DashboardLayout>
  );
};

export default WebScraperApi;

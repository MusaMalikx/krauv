import React from 'react'
import InactiveItem from '../../../components/dashboard/inactive/InactiveItem'
import DashboardLayout from '../../../components/layouts/DashboardLayout'

const SerpScraperApi = ({theme, setTheme}) => {
  return (
    <DashboardLayout
    title="SERP Scraper API"
    theme={theme}
    setTheme={setTheme}
  >
    <InactiveItem title="SERP Scraper API" />
  </DashboardLayout>
  )
}

export default SerpScraperApi
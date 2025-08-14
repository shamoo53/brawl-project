"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <DashboardContent />
      </SidebarInset>
    </SidebarProvider>
  )
}

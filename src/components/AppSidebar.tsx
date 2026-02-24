import React from "react";
import { MOCK_USER } from "@/data/mockData";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border-dark bg-background-dark z-50">
      <SidebarHeader className="h-16 flex items-center flex-row px-6 border-b border-border-dark bg-background-dark">
        <div className="flex items-center gap-3 w-full">
          <img
            src="/logo.png"
            alt="MetricsFlow Logo"
            className="size-8 rounded-lg shadow-lg shadow-primary/20 shrink-0 object-cover"
          />
          <h1 className="text-white text-base font-semibold tracking-tight truncate">MetricsFlow</h1>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-background-dark p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted text-xs font-semibold uppercase tracking-wider px-2 mb-1">
            Main
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-11 px-4 py-3 gap-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <a href="#">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    dashboard
                  </span>
                  <span className="text-sm font-medium">Overview</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-11 px-4 py-3 gap-3 rounded-lg text-muted hover:text-white hover:bg-card-dark transition-colors"
              >
                <a href="#">
                  <span className="material-symbols-outlined">analytics</span>
                  <span className="text-sm font-medium">Analytics</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-11 px-4 py-3 gap-3 rounded-lg text-muted hover:text-white hover:bg-card-dark transition-colors"
              >
                <a href="#">
                  <span className="material-symbols-outlined">group</span>
                  <span className="text-sm font-medium">Customers</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-11 px-4 py-3 gap-3 rounded-lg text-muted hover:text-white hover:bg-card-dark transition-colors"
              >
                <a href="#">
                  <span className="material-symbols-outlined">payments</span>
                  <span className="text-sm font-medium">Billings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <div className="my-2 border-t border-border-dark mx-2"></div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted text-xs font-semibold uppercase tracking-wider px-2 mb-1">
            Settings
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-11 px-4 py-3 gap-3 rounded-lg text-muted hover:text-white hover:bg-card-dark transition-colors"
              >
                <a href="#">
                  <span className="material-symbols-outlined">hub</span>
                  <span className="text-sm font-medium">Integrations</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-11 px-4 py-3 gap-3 rounded-lg text-muted hover:text-white hover:bg-card-dark transition-colors"
              >
                <a href="#">
                  <span className="material-symbols-outlined">settings</span>
                  <span className="text-sm font-medium">Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 bg-background-dark mt-auto border-t border-border-dark">
        <button className="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-card-dark transition-colors text-left group">
          <div
            className="size-9 rounded-full bg-cover bg-center ring-2 ring-border-dark shrink-0"
            style={{ backgroundImage: `url('${MOCK_USER.avatar}')` }}
          ></div>
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{MOCK_USER.name}</p>
            <p className="text-xs text-muted truncate">{MOCK_USER.email}</p>
          </div>
          <span className="material-symbols-outlined text-muted hover:text-white ml-auto transition-colors">unfold_more</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}

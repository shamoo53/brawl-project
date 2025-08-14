"use client"

import * as React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HomeIcon, UserIcon, GemIcon, SwordsIcon, StoreIcon, SettingsIcon, LogOutIcon, ChevronUpIcon, ChevronDownIcon, PlusIcon } from 'lucide-react'

// Sample navigation items
const mainNavigation = [
  { title: "Dashboard", href: "/dashboard", icon: HomeIcon, isActive: true },
  { title: "Profile", href: "#", icon: UserIcon },
  { title: "My NFTs", href: "#", icon: GemIcon },
  { title: "Matches", href: "#", icon: SwordsIcon },
  { title: "Marketplace", href: "#", icon: StoreIcon },
]

const secondaryNavigation = [
  { title: "Settings", href: "#", icon: SettingsIcon },
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2 p-2">
          <img src="/placeholder-logo.svg" alt="Reactarckade-Brawl Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white group-data-[state=collapsed]:hidden">Reactarckade</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Community</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <SwordsIcon className="h-5 w-5" />
                    <span>Leaderboards</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <PlusIcon className="h-5 w-5" />
                    <span>Create Team</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="h-7 w-7">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <span className="group-data-[state=collapsed]:hidden">PlayerOne</span>
                  <ChevronUpIcon className="ml-auto h-4 w-4 group-data-[state=collapsed]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width] bg-gray-800 border-gray-700 text-white">
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                  <Link href="#" className="flex items-center w-full">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Account</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                  <Link href="#" className="flex items-center w-full">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                  <Link href="/signin" className="flex items-center w-full">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

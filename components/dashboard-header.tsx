"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserIcon, SettingsIcon, LogOutIcon, ChevronDownIcon } from 'lucide-react'
import Link from "next/link"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-700 px-4 bg-gray-900 text-white">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4 bg-gray-700" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>RB</AvatarFallback>
            </Avatar>
            <span className="hidden md:inline">PlayerOne</span>
            <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-white">
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
              <Link href="#" className="flex items-center w-full">
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
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
                <span>Log Out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

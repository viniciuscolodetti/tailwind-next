'use client'

import { Logo } from '@/components/Sidebar/Logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import * as Navigation from './Navigation'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <Navigation.Root type="single">
          <Navigation.Trigger value="home" title="Home" icon={Home} href="#" />
          <Navigation.Trigger
            value="dashboard"
            title="Dashboard"
            icon={BarChart}
          />
          <Navigation.Trigger
            value="projects"
            title="Projects"
            icon={SquareStack}
          />
          <Navigation.Trigger value="tasks" title="Tasks" icon={CheckSquare} />
          <Navigation.Trigger value="reporting" title="Reporting" icon={Flag} />
          <Navigation.Trigger value="users" title="Users" icon={Users} />
        </Navigation.Root>

        <div className="mt-auto flex flex-col gap-6">
          <Navigation.Root type="single">
            <Navigation.Trigger
              value="support"
              title="Support"
              icon={LifeBuoy}
              href="#"
            />
            <Navigation.Trigger value="settings" title="Settings" icon={Cog}>
              <Navigation.Item href="#">Option 1</Navigation.Item>
              <Navigation.Item href="#">Option 2</Navigation.Item>
            </Navigation.Trigger>
          </Navigation.Root>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

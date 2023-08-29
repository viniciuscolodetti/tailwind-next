/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import { ToggleTheme } from './ToggleTheme'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/viniciuscolodetti.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Vinicius Colodetti
        </span>
        <span className="truncate text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          vinicius.colodetti@gmail.com
        </span>
      </div>
      <div className="flex gap-2">
        <ToggleTheme />

        <Button type="button" variant="ghost">
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

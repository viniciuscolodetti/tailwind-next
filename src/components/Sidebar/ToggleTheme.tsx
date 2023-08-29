'use client'

import { Moon, Sun } from 'lucide-react'
import { Button } from '../Button'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() =>
        currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
      }
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}

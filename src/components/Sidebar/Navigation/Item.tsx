import { ComponentProps } from 'react'

export type ItemProps = ComponentProps<'a'>

export function Item({ children, ...props }: ItemProps) {
  return (
    <a
      className="block cursor-pointer py-1 hover:text-violet-500 dark:hover:text-violet-300"
      {...props}
    >
      {children}
    </a>
  )
}

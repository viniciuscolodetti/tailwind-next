import * as Accordion from '@radix-ui/react-accordion'
import { ReactNode } from 'react'

interface RootProps extends Accordion.AccordionSingleProps {
  children: ReactNode
}

export function Root({ children, ...props }: RootProps) {
  return (
    <Accordion.Root collapsible className="space-y-0.5" {...props}>
      {children}
    </Accordion.Root>
  )
}

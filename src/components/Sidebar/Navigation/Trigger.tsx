import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'
import { NavItem } from './NavItem'

export interface TriggerProps extends Accordion.AccordionItemProps {
  title: string
  href?: string
  icon: ElementType
}

export function Trigger({
  title,
  href,
  icon: Icon,
  children,
  ...props
}: TriggerProps) {
  return (
    <Accordion.Item className="overflow-hidden" {...props}>
      {children ? (
        <>
          <Accordion.Header>
            <Accordion.AccordionTrigger className="group flex w-full items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 data-[state=open]:bg-violet-50 dark:hover:bg-zinc-800 dark:data-[state=open]:bg-zinc-800">
              <Icon className="h-5 w-5 text-zinc-500" />
              <span className="font-medium text-zinc-700 group-hover:text-violet-500 group-data-[state=open]:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300 dark:group-data-[state=open]:text-violet-300">
                {title}
              </span>
              <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform duration-300 group-hover:text-violet-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-violet-300 dark:text-zinc-600" />
            </Accordion.AccordionTrigger>
          </Accordion.Header>

          <Accordion.AccordionContent className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <div className="divide-y divide-zinc-100 px-3 py-1 text-sm dark:divide-zinc-800">
              {children}
            </div>
          </Accordion.AccordionContent>
        </>
      ) : (
        <NavItem href={href} title={title} icon={Icon} />
      )}
    </Accordion.Item>
  )
}

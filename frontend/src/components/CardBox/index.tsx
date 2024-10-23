import React, { ReactElement, ReactNode } from 'react'
import CardBoxComponentBody from './Component/Body'
import CardBoxComponentFooter from './Component/Footer'
import { twMerge } from 'tailwind-merge'

type Props = {
  rounded?: string
  flex?: string
  className?: string
  hasComponentLayout?: boolean
  hasTable?: boolean
  isHoverable?: boolean
  isModal?: boolean
  footer?: ReactNode
  onClick?: (e: React.MouseEvent) => void
  children: ReactElement
}

export default function CardBox({
  rounded = 'rounded-2xl',
  flex = 'flex-col',
  className = '',
  hasComponentLayout = false,
  hasTable = false,
  isHoverable = false,
  isModal = false,
  children,
  footer,
  onClick,
}: Props) {
  let componentClass = twMerge([
    'bg-white flex',
    className,
    rounded,
    flex,
    isModal ? 'dark:bg-slate-900' : 'dark:bg-slate-900/70',
    isHoverable && 'hover:shadow-lg transition-shadow duration-500'
  ]);

  return React.createElement(
    'div',
    { className: componentClass, onClick },
    hasComponentLayout ? (
      children
    ) : (
      <>
        <CardBoxComponentBody noPadding={hasTable}>{children}</CardBoxComponentBody>
        {footer && <CardBoxComponentFooter>{footer}</CardBoxComponentFooter>}
      </>
    )
  )
}

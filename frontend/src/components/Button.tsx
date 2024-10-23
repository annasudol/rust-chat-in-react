import React from 'react'
import Link from 'next/link'
import { getButtonColor } from '../colors'
import Icon from './Icon'
import type { ColorButtonKey } from '../interfaces'
import { twMerge } from 'tailwind-merge'

type Props = {
  label?: string
  icon?: string
  iconSize?: string | number
  href?: string
  target?: string
  type?: string
  color?: ColorButtonKey
  className?: string
  asAnchor?: boolean
  small?: boolean
  outline?: boolean
  active?: boolean
  disabled?: boolean
  roundedFull?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export default function Button({
  label,
  icon,
  iconSize,
  href,
  target,
  type,
  color = 'white',
  className = '',
  asAnchor = false,
  small = false,
  outline = false,
  active = false,
  disabled = false,
  roundedFull = false,
  onClick,
}: Props) {
  const componentClass = twMerge([
    'inline-flex',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'focus:outline-none',
    'transition-colors',
    'focus:ring',
    'duration-150',
    'border',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    roundedFull ? 'rounded-full' : 'rounded',
    getButtonColor(color, outline, !disabled, active),
    className,
    !label && icon && 'p-1',
    small ? 'text-sm' : 'py-2',
    outline && 'opacity-50',
    href &&
      'border-none bg-transparent hover:bg-transparent focus:bg-transparent focus:ring-0 outline-none text-blue-700 hover:text-blue-900',
  ])

  const componentChildren = (
    <>
      {icon && <Icon path={icon} size={iconSize} />}
      {label && <span className={small && icon ? 'px-1' : 'px-2'}>{label}</span>}
    </>
  )

  if (href && !disabled) {
    return (
      <Link href={href} target={target} className={componentClass}>
        {componentChildren}
      </Link>
    )
  }

  return React.createElement(
    asAnchor ? 'a' : 'button',
    { className: componentClass, type: type ?? 'button', target, disabled, onClick },
    componentChildren
  )
}

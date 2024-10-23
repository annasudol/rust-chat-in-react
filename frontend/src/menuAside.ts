import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/forms',
    label: 'Forms',
    icon: mdiSquareEditOutline,
  },
  {
    href: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide,
  },
  {
    href: '/responsive',
    label: 'Responsive',
    icon: mdiResponsive,
  },
  {
    href: '/',
    label: 'Styles',
    icon: mdiPalette,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
  {
    href: '/error',
    label: 'Error',
    icon: mdiAlertCircle,
  },
]

export default menuAside

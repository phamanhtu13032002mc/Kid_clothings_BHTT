import React from 'react'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

import { cilSpeedometer, cilPuzzle } from '@coreui/icons'
const _nav = [
  {
    component: CNavTitle,
    name: 'Asset Management',
  },
  {
    component: CNavGroup,
    name: 'Setting',
    to: '/setting',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bán Hàng',
        to: '/setting/broker',
      },
      {
        component: CNavItem,
        name: 'Thống kê',
        to: '/setting/chainnetwork',
      },
      {
        component: CNavItem,
        name: 'Chain Node',
        to: '/setting/chainnode',
      },
      {
        component: CNavItem,
        name: 'Wallet',
        to: '/setting/wallet',
      },
      {
        component: CNavItem,
        name: 'Token',
        to: '/setting/token',
      },
      {
        component: CNavItem,
        name: 'Alert Rules',
        to: '/setting/alertrules',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'History',
    to: '/history',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Deposit',
        to: '/history/deposit',
      },
      {
        component: CNavItem,
        name: 'Withdrawal',
        to: '/history/withdrawal',
      },
      {
        component: CNavItem,
        name: 'Scan Collet',
        to: '/history/scancollect',
      },
    ],
  },
]

export default _nav

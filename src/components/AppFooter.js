import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.5roi.com/" target="_blank" rel="noopener noreferrer">
          5ROI
        </a>
        <span className="ms-1">Admin_Assets</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://headcapital.com/" target="_blank" rel="noopener noreferrer">
          HeadCapital
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

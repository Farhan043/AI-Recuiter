import React from 'react'
import DashboardProvider from './provider'
import { Toaster } from '@/components/ui/sonner'

function Dashboardlayout({children}) {
  return (
    <div>
        <DashboardProvider>
          <div className='p-4'>
        {children}
          </div>
          <Toaster />
        </DashboardProvider>
        </div>
  )
}

export default Dashboardlayout
import React from 'react'
import { Outlet } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div>
        <h1> I am Navigation</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default Navigation
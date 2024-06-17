import React from 'react'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'

function Navigation() {
  return (
    <Fragment>
      <div>
        <h1> I am Navigation</h1>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
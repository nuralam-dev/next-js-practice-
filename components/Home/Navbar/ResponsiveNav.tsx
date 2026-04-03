import React from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Hero from '../Hero/Hero'

const ResponsiveNav = () => {
  return (
    <div>
      <Navbar/>
      <MobileNavbar/>
      <Hero/>
    </div>
  )
}

export default ResponsiveNav

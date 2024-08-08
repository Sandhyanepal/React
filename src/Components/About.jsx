import React from 'react'
import Profile from './Profile'
// import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'

const About = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Profile name={"Sandhya"}/>
      <ProfileClass name={"Sandhya"}/>
      {/* <Outlet/> */}
    </div>
  )
}

export default About

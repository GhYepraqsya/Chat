import React from 'react'
import {
  NavBar,
  NavBarBody,
  NavBarElement
} from './style'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <NavBar>
        <NavBarBody>
          <NavBarElement><Link to='/'>Home</Link></NavBarElement>
          <NavBarElement><Link to='/add'>Add Product</Link></NavBarElement>
          <NavBarElement><Link to='/update'>Update</Link></NavBarElement>
          <NavBarElement><Link to='/logout'>Log Out</Link></NavBarElement>
          <NavBarElement><Link to='/profile'>Profile</Link></NavBarElement>
          <NavBarElement><Link to='/sign-up'>Sign Up</Link></NavBarElement>
          {/* <NavBarElement><Link to='/sign-in'>Sign In</Link></NavBarElement>
          <NavBarElement><Link to='/sign-up'>Sign Up</Link></NavBarElement> */}
        </NavBarBody>
      </NavBar>
    </>
  )
}


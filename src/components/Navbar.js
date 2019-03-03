import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../images/icon.png'

const Nav = () => {
    return(
        <Navbar bg="dark" variant="dark" className="sticky">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' Angular/Angular'}
            </Navbar.Brand>
        </Navbar>
    )
}

export default Nav
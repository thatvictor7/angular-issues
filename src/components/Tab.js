import React from 'react'
import { Nav } from 'react-bootstrap'
import exclamation from '../images/exclamation.png'

const Tab = () => {
    return (
        <Nav  variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" className="tab">
            <img 
                width="20"
                height="20"
                className="exclamation"
                src={exclamation}
                />
             Issues</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled eventKey="link-2">Code</Nav.Link>
          </Nav.Item>
        </Nav>
    )
}

export default Tab
import React from 'react'
import { Nav,Badge } from 'react-bootstrap'

const Tab = (props) => {
    const { count } = props
    return (
        <Nav  variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" className="tab">
             Issues
             <Badge pill variant="danger" className="issues-badge">
               {count.length}
             </Badge>
             </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled eventKey="link-2">Code</Nav.Link>
          </Nav.Item>
        </Nav>
    )
}

export default Tab
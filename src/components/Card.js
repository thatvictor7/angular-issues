import React from 'react'
import { Button,Card,Badge,Image,Col } from 'react-bootstrap'

const CardIssue = (props) => {
    const { title,body,user,link } = props
    // console.log("aye",user);
    
    return(
        <Card>
          {/* <Card.Header as="h5">ocombe</Card.Header> */}
          <Card.Body>
            <Card.Title><a href={link}>{title}</a></Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
            <img 
                height="25"
                className="user-icon"
                src={user.avatar_url}
            />
            <Badge pill variant="success">
              {user.login}
            </Badge>
          </Card.Body> 
        </Card>
    )
}

export default CardIssue
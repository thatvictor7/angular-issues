import React from 'react'
import { Button,Card,Badge } from 'react-bootstrap'

const CardIssue = (props) => {
    const { title,body,user,link,assignee,clicked,changeDisplay } = props
    // let clicked = false
    // console.log("aye",assignee.login);
    
    
    return(
        <Card>
          {/* <Card.Header as="h5">ocombe</Card.Header> */}
          <Card.Body>
            <Card.Title><a href={link}>{title}</a></Card.Title>
            <img 
                height="25"
                className="user-icon"
                src={user.avatar_url}
            />
            <Badge pill variant="success">
              {user.login}
            </Badge>
            
            <Card.Text>
              {body}
            </Card.Text>
            {assignee ? 
                <Badge variant="secondary" pill>Assignee: {assignee.login}</Badge> : 
                <Badge variant="secondary" pill>Assignee:</Badge>}
          </Card.Body> 
        </Card>
    )
}

export default CardIssue
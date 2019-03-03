import React from 'react'
import { Button,Card } from 'react-bootstrap'

const CardIssue = () => {
    return(
        <Card>
          <Card.Header as="h5">ocombe</Card.Header>
          <Card.Body>
            <Card.Title>ci: update packageFiles to be renovated</Card.Title>
            <Card.Text>
              {"I have a set of routes configuration that should work after @angular 6.1.0, but it doesn't.\r\n\r\n```\r\nconst routes: Routes = [\r\n  { path: '', children: [\r\n    { path: 'reconciliation', loadChildren: './reconciliation/reconciliation.module#ReconciliationModule' },\r\n  ]}\r\n];\r\n\r\n```\r\n "}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    )
}

export default CardIssue
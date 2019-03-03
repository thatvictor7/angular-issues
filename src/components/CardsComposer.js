import React from 'react'
import CardIssue from './Card'

const CardsComposer = (props) => {
    const { data } = props
    console.log(data)
    return(
        <div>
            {data.map(issue => {
                return <CardIssue title={issue.title} 
                                  body={issue.body} 
                                  user={issue.user} 
                                  link={issue.html_url}
                                  assignee={issue.assignee}/>
            })}
        </div>
        )
    }

export default CardsComposer
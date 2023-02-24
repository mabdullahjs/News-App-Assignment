import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


function ShowNews() {
    const location = useLocation();
    console.log(location.state.e.author)
  return (
    <div>
        <Card className='container'>
        <Card.Img variant="top" src={location.state.e.urlToImage} />
        <Card.Body>
            <h1>{location.state.e.title}</h1>
          <Card.Text>
            {location.state.e.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ShowNews
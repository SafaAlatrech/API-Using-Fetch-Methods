import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({user}) => {
    return (
<div>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.phone}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    )
}

export default UserCard

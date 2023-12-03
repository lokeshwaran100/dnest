import React from 'react'
import { Card, Container, Col, Row, Button} from "react-bootstrap";
import pic1 from '../pictures/undraw_people_tax5.svg'
import pic2 from '../pictures/undraw_celebration_0jvk.svg'
import pic3 from '../pictures/undraw_fans_gr54.svg'

export default function FindRoommatesContent() {
    return (
        <section className="find-roommates-content mt-5">
        <Container>
        <h3 className="my-4">All with the Security and Assurity of Defi Chain</h3>
            <Row>
        <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top" src={pic1} className="find-roommates-content-cards-pic"/>
            <Card.Body>
              <Card.Title>No more worries on your initial deposits</Card.Title>
              <Card.Text>
              Rent stress-free with our platform – no worries about initial deposits, just find your perfect home hassle-free.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top" src={pic2} className="find-roommates-content-cards-pic" />
            <Card.Body>
              <Card.Title>Pay rent with one tap using your crypto</Card.Title>
              <Card.Text>
              Simplify rent payments with a single tap, seamlessly using cryptocurrency for an effortless and modern renting experience.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top"  src={pic3} className="find-roommates-content-cards-pic" />
            <Card.Body>
              <Card.Title>Smart contracts for Secure agreement</Card.Title>
              <Card.Text>
              Streamline your rental agreements with smart contracts, while you enjoy and have fun with your family and friends.
              </Card.Text>
            </Card.Body>
          </Card>          
          </Col>
          </Row>
        </Container>
        </section>
    )
}

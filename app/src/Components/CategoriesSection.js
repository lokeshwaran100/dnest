import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import personalRoomsPic from '../pictures/personal-rooms.jpg'
import familyApartments from '../pictures/family-apartments.jpg'
import villas from '../pictures/villas.jpg'

export default function CategoriesSection() {
  return (
    <div>
      <Container>
      <h2 className="mt-4">Rent Anywhere</h2>
      <p className="heading-p">EXPLORE OUR SELECTION OF THE BEST PLACES</p>
    
        <Row className="mt-5">
        <Col sm={12} md={4} lg={4}>
          <Card className="category-cards text-dark mt-3">
            <Card.Img variant="top" src={personalRoomsPic} className="category-img"/>
            <Card.Body>
              <Card.Title>Small Rooms</Card.Title>
              <Card.Text>
                Find Rooms that you can afford and live with minimal cost
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="category-cards text-dark mt-3">
            <Card.Img variant="top" src={familyApartments} className="category-img"/>
            <Card.Body>
              <Card.Title>Family Apartments</Card.Title>
              <Card.Text>
              Find houses that are suitable for your family and live with your family.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="category-cards text-dark mt-3">
            <Card.Img variant="top" src={villas} className="category-img"/>
            <Card.Body>
              <Card.Title>Luxury Rentals</Card.Title>
              <Card.Text>
              Rent a premium houses with swimming pool, gym, and other facilities.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

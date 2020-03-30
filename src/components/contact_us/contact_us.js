import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Top from '../top/top';
import './contact_us.css';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <Top title="TELL US YOUR STORY"></Top>

        <Form className="contact-form mx-auto">
          <br></br>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>County</Form.Label>
              <Form.Control as="select">
                <option>City of Bristol</option>
                <option>Buckinghamshire</option>
                <option>Cambridgeshire</option>
                <option>City of London</option>
                <option>Cornwall</option>
                <option>Essex</option>
                <option>Greater London</option>
                <option>Greater Manchester</option>
                <option>Hertfordshire</option>
                <option>Kent</option>
                <option>Norfolk</option>
                <option>Oxfordshire</option>
                <option>Somerset</option>
                <option>Surrey</option>
                <option>Warwickshire</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <Container className="text-center">
          <Button variant="outline-light" type="submit">
            Submit
            </Button>
        </Container>
      </div>)

  }
}
export default ContactForm;

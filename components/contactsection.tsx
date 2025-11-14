"use client"
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function ContactSection() {
  return (
    <div className="contact-card">
      <Row>
        <Col md={6} className="pe-md-4">
          <h2>Contact Us</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="mt-4">
            <p><strong>Email:</strong> merliahsummers@malibu.co</p>
            <p><strong>Phone:</strong> +62 888 8767 4864</p>
            <p><strong>Location:</strong> Bali, Indonesia</p>
          </div>
        </Col>
        <Col md={6} className="ps-md-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="youremail@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Tell us about your idea..." />
            </Form.Group>
            <Button className="btn-primary-pink" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
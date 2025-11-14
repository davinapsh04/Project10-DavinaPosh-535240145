"use client"
import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Footer(): JSX.Element {
  return (
    <footer id="footer" className="pt-md-5 pd-md-2 py-5" style={{ background: 'linear-gradient(180deg, rgba(255,240,247,0.6), transparent)' }}>
      <Container>
        <Row className="gy-4">
          {/* Our Products */}
          <Col md={3}>
            <h5 style={{ color: 'var(--pink)', fontWeight: 700 }}>Our Products</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><a href="#">Account</a></li>
              <li className="mb-2"><a href="#">Bundle</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">Circular</a></li>
            </ul>
          </Col>

          {/* Quick Link */}
          <Col md={3}>
            <h5 style={{ color: 'var(--pink)', fontWeight: 700 }}>Quick Link</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><a href="#home">Home</a></li>
              <li className="mb-2"><a href="#about">About Us</a></li>
              <li className="mb-2"><a href="#service">Service</a></li>
              <li className="mb-2"><a href="#work">Work</a></li>
              <li className="mb-2"><a href="#products">Products</a></li>
            </ul>
          </Col>

          {/* Terms */}
          <Col md={3}>
            <h5 style={{ color: 'var(--pink)', fontWeight: 700 }}>Terms</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><a href="#">Refund Policy</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2"><a href="#">License</a></li>
            </ul>
          </Col>

          {/* Search + Social */}
          <Col md={3}>
            <h5 style={{ color: 'var(--pink)', fontWeight: 700 }}>Search Here</h5>
            <Form className="mb-3 mt-3" onSubmit={(e) => e.preventDefault()}>
              <InputGroup>
                <Form.Control type="text" placeholder="Search Here" aria-label="Search footer" />
                <Button variant="info" type="button">Search</Button>
              </InputGroup>
            </Form>

            {/* Follow Us  */}
            <h6 style={{ color: 'var(--pink)', fontWeight: 700, marginTop: '1rem' }}>Follow Us</h6>
            <p className="text-muted" style={{ fontSize: '.95rem' }}>Find our social channels below</p>
          </Col>
        </Row>

        {/* S₂O */}
        <Row className="mt-4 align-items-center">
          <Col md={4} className="mb-2">
            <h4 className="mb-0">S₂O</h4>          </Col>

          <Col md={4} className="text-center mb-2">
            <small className="text-muted">S₂O ❤️ Merliah Summers</small>
          </Col>

          {/* Social Media Iconz */}
          <Col md={4} className="text-end mb-2">
            <a href="#" className="me-3" aria-label="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="me-3" aria-label="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="me-3" aria-label="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="me-3" aria-label="youtube"><i className="bi bi-youtube"></i></a>
            <a href="#" aria-label="pinterest"><i className="bi bi-pinterest"></i></a>
          </Col>
        </Row>

        <hr />
        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <small className="text-muted">© 2025 S₂O. All rights reserved by @ Davina Posh</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

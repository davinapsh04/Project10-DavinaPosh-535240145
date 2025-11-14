"use client"
import React, { useCallback } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

function navbar(): JSX.Element {
  const handleConnectClick = useCallback(() => {
    try {
      const contact = document.getElementById('contact')
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
          const input = contact.querySelector<HTMLInputElement>('input[placeholder="Your name"], input[name="name"], textarea')
          if (input) input.focus()
        }, 450)
      } else {
        window.location.href = 'mailto:merliahsummers@malibu.co'
      }
    } catch (err) {
      console.error('connect action failed', err)
    }
  }, [])

  return (
    <Navbar expand="lg" className="navbar-pink py-3" sticky="top">
      <Container className="container-narrow d-flex align-items-center">
        <Navbar.Brand href="#" className="navbar-brand">S₂O</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav className="ms-auto me-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: 20, minWidth: 160 }}
            />
            <Button
              variant="outline-none"
              className="btn-outline-pink"
              type="button"
              aria-label="Connect with us"
              onClick={handleConnectClick}
            >
              Connect
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar;
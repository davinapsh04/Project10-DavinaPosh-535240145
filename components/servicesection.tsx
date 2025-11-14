"use client";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

function ServiceSection() {
  const services = [
    {
      title: 'Best View',
      desc: 'Lorem ipsum dolot sit',
      icon: '/images/about-icon1.png'
    },
    {
      title: 'Infinity Pool',
      desc: 'Lorem ipsum dolot sit',
      icon: '/images/about-icon2.png'
    },
    {
      title: 'Sun Deck',
      desc: 'Lorem ipsum dolot sit',
      icon: '/images/about-icon3.png'
    },
  ]

  return (
    <Container id="service" className="container-narrow">
      <Row className="text-center mb-4">
        <Col><h2>Our Services</h2><p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></Col>
      </Row>
      <Row>
        {services.map((s, idx) => (
          <Col md={4} key={idx} className="text-center mb-3">
            <div className="service-icon mb-3 mx-auto">
              <Image src={s.icon} alt={s.title} width={46} height={46} />
            </div>
            <h5>{s.title}</h5>
            <p className="text-muted">{s.desc}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ServiceSection;
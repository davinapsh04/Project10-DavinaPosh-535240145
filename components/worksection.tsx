"use client"
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';

type Project = {
  id: number
  title: string
  desc: string
  image: string
  tag?: string
}

function WorkSection(): JSX.Element {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Coconut IceCream',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.',
      image: '/images/image-44.jpg',
      tag: 'Special',
    },
    {
      id: 2,
      title: 'Citrus Cocktail',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.',
      image: '/images/image-45.jpg',
      tag: 'Featured',
    },
    {
      id: 3,
      title: 'Acai bowl',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.',
      image: '/images/image-46.jpg',
      tag: 'Featured',
    },
  ]

  return (
    <Container id="work" className="container-narrow">
      <Row className="mb-4 text-center">
        <Col>
          <h2>Selected Projects</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>

      <Row>
        {projects.map((p) => (
          <Col md={4} key={p.id} className="mb-3">
            <Card className="card-surf">
              <div style={{ position: 'relative', height: 450 }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title as="h5" className="mb-0">{p.title}</Card.Title>
                  {p.tag ? <span className="card-tag">{p.tag}</span> : null}
                </div>

                <Card.Text className="text-muted">{p.desc}</Card.Text>

                {/* Read More */}
                <a href="#" className="read-more" aria-label={`Read more about ${p.title}`}>
                  Read More <span aria-hidden="true">→</span>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default WorkSection;

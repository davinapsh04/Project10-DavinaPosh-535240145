"use client"
import React from "react";
import Image from "next/image";

// Components
import SiteLayout from "../components/SiteLayout";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

// Bootstrap
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <h2>About Us </h2>
            <h6 className="text-muted">Merliah Summers vibes</h6>
            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, ratione vitae voluptas dolorum consequuntur alias velit id in minus ex hic autem quidem soluta odio cum veritatis commodi expedita. Debitis?</p>
            <Button className="btn-primary-pink me-2">Learn More</Button>
            <Button className="btn-outline-pink" href="#work" >Our Work</Button>
          </Col>
          <Col md={6} className="text-center">
            <Image src="/images/about.jpg" alt="about" width={520}
              height={360} style={{ borderRadius: 16, objectFit: 'cover' }}></Image>
          </Col>
        </Row>
      </Container>
      <section className="py-5">
        <WorkSection></WorkSection>
      </section>
      <section className="py-5 services-section">
        <ServiceSection></ServiceSection>
      </section>
      <section id="contact">
        <Container className="container-narrow">
          <ContactSection></ContactSection>
        </Container>
      </section>
    </SiteLayout>
  );
}
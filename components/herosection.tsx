"use client"
import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = (): JSX.Element => {
  const slides: Slide[] = [
    {
      title: "Welcome to S₂O",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, harum",
      imageUrl: "/images/banner_01.JPG",
    },
    {
      title: "Coastal Creativity",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, harum",
      imageUrl: "/images/banner_02.JPG",
    },
    {
      title: "Merliah Summers",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, harum",
      imageUrl: "/images/banner_03.jpg",
    },
  ];

  return (
    <Carousel fade interval={4500} data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
              minHeight: "420px",
            }}
          />
          <Carousel.Caption className="hero-caption-overlay">
            <span className="card-tag">Summer 2025</span>
            <h1 className="display-4 fw-bold mt-3">{slide.title}</h1>
            <p className="lead-hero">{slide.subtitle}</p>
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-primary-pink" href="#work">
                Our Work
              </a>
              <a className="btn btn-outline-pink" href="#contact">
                Get In Touch
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;

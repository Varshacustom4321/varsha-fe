import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import '../css/Services.css';
import repair from '../assets/pcrepair.jpg';
import pctroubleshoot from '../assets/pctroubleshoot.jpg';
import pcupgrade from '../assets/pcupgrade.jpg';

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      text: "Gaming PC Or Normal PC installation and upgrades",
      image: repair
    },
    { 
      text: "Computer Diagnosis and Troubleshooting",
      image: pctroubleshoot
    },
    { 
      text: "PC Configuration related services",
      image: pcupgrade
    },
    { 
      text: "Laptop Repair and Upgrades Services at your doorstep",
      image: repair // Repeating first image
    },
    { 
      text: "Computer components and Accessories (contact for details)",
      image: pctroubleshoot // Repeating second image
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="services-list">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            ref={el => serviceRefs.current[index] = el}
            key={index}
          >
            
            <div className="service-number">{index + 1}</div>
            <div className="service-content">
              <p className="service-text">{service.text}</p>
              <div className="contact-wrapper">
                <button className="contact-button">Contact Us</button>
                <div className="contact-icons">
                  <a href="https://wa.me/916300960220" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="icon whatsapp" />
                  </a>
                  <a href="tel:+916300960220">
                    <FaPhone className="icon phone" />
                  </a>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
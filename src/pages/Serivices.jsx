import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import '../css/Services.css';
import pcdiagnose from '../assets/pcdiagnose.jpg';
import installion from '../assets/installation.png';
import pcconfig from '../assets/pcconfig.jpg';
import caa from '../assets/caa.jpg';
import laptop_repair from '../assets/laptop_repair.jpg';

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
      image: installion,
      msg: "Hi%2C%20I%20need%20help%20with%20PC%20installation%20and%20upgrade"
    },
    { 
      text: "Computer Diagnosis and Troubleshooting",
      image: pcdiagnose,
      msg: "Hi%2C%20I%20need%20help%20with%20computer%20diagnosis%20and%20troubleshooting."
    },
    { 
      text: "PC Configuration related services",
      image: pcconfig,
      msg: "Hi%2C%20I%20need%20help%20with%20PC%20configuration."
    },
    { 
      text: "Laptop Repair and Upgrades Services at your doorstep",
      image: laptop_repair,
      msg: "Hi%2C%20I%20need%20help%20with%20laptop%20repair%20and%20upgrade%20service"
    },
    { 
      text: "Computer components and Accessories (contact for details)",
      image: caa,
      msg: "Hi%2C%20I%20need%20details%20about%20the%20price%20and%20availability%20of%20components%20and%20accessories"
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
                 <a href={`https://wa.me/916300960220?text=${service.msg}`} target="_blank" rel="noopener noreferrer">
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
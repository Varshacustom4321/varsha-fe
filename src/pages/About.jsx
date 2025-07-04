import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import '../css/About.css'; // make sure you import this new CSS

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>

      <p className="about-text">
        Varsha Custom Computing, established in 2025, is a dedicated provider of personalized computer solutions. We specialize in custom PC assembly, hardware upgrades, and professional operating system installations, tailored to meet the unique needs of each customer.
      </p>

      <p className="about-text">
        Whether you're a gamer, creative professional, student, or business user, we ensure your system is built and optimized for peak performance and reliability. Alongside our custom builds, we also offer a range of computer services, including system diagnostics, repairs, and performance tuning.
      </p>

      <p className="about-text">
        At Varsha Custom Computing, we combine technical expertise with a passion for customer satisfaction—building more than just PCs, we build trust.
      </p>

      <div className="contact-wrapper">
        <button className="contact-button">Contact</button>
        <div className="contact-icons">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon whatsapp" />
          </a>
          <a href="tel:+919876543210">
            <FaPhone className="icon phone" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

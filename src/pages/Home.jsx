import { useEffect, useRef } from 'react';
import '../css/Home.css';
import robot from '../assets/robotpc.jpg';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Home = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.4 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const titleWords = ["Varsha", "Custom", "Computing"];

  return (
    <div className='Home_maindiv'>
      <div className="hero-section">
        <h1 className='title'>
          {titleWords.map((word, idx) => (
            <span
              className='title-word'
              style={{ 
                animationDelay: `${idx * 0.5}s`,
                animationDuration: `${0.8 + idx * 0.2}s`
              }}
              key={idx}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className='rb_img'>
          <img src={robot} alt="Robot PC" />
        </div>
      </div>

      <div className="card-group">
        <h3 className='second_title'>What We Do?</h3>
        
        <div className="cards-container">
          {[
            "Looking for reliable computer repair, upgrade, and installation services? Whether you're setting up a high-performance gaming PC or a standard desktop computer, we offer professional PC installation and upgrade solutions tailored to your needs.",
            "We specialize in computer diagnosis and troubleshooting, helping you quickly identify and fix performance issues, hardware failures, and software glitches. From slow startup issues to blue screen errors and unexpected crashes, our team provides fast, effective resolutions.",
            "We also assist with PC configuration, whether you're customizing your system for gaming, content creation, or everyday use. Additionally, we supply a wide range of computer components and accessories, including processors, RAM, graphics cards, SSDs, keyboards, and more. Contact us today to upgrade your system or resolve any computer-related issues with ease and confidence."
          ].map((text, idx) => (
            <div className='card' ref={el => (cardsRef.current[idx] = el)} key={idx}>
              <p>{text}</p>

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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
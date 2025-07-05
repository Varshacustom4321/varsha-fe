import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import '../css/Amc.css';

const Amc = () => {
  const plans = [
    {
      title: "Basic AMC Plan",
      price: "₹1,799/Year",
      description: "For home users and light office usage",
      features: [
        "2 preventive maintenance visits/year",
        "OS health check, driver updates, & system cleaning",
        "Basic hardware diagnostics",
        "Phone/remote support (during business hours)"
      ]
    },
    {
      title: "Standard AMC Plan",
      price: "₹3,999/year",
      description: "Ideal for gamers, freelancers, and small businesses",
      features: [
        "4 maintenance visits/year",
        "Priority support and faster response times",
        "Software reinstallation & backup assistance",
        "Basic dust cleaning of internal components"
      ]
    },
    {
      title: "Premium AMC Plan",
      price: "₹5,999/year",
      description: "For high-performance setups, studios, or professionals",
      features: [
        "6 visits/year + emergency visits on request",
        "Full system cleanup + thermal paste reapplication",
        "BIOS & firmware updates (if applicable)",
        "Detailed performance check & tuning"
      ]
    }
  ];

  const terms = [
    "AMC plans are non-transferable and valid for one system only",
    "Parts replacement cost is not included (only service & support)",
    "Visits must be scheduled in advance (except for Premium emergencies)",
    "AMC does not cover physical, liquid, or electrical damage",
    "Coverage is limited to a 30km service radius (custom quotes available outside zone)"
  ];

  return (
    <div className="amc-container">
      <h1 className="amc-title">Annual Maintenance Contracts</h1>
      
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <div className="plan-header">
              <h2>{plan.title}</h2>
              <div className="plan-price">{plan.price}</div>
            </div>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="contact-wrapper">
              <button className="contact-button">Get This Plan</button>
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

      <div className="terms-container">
        <h3>Terms & Conditions</h3>
        <ul className="terms-list">
          {terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Amc;
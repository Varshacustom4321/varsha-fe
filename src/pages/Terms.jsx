import '../css/Terms.css'; // new CSS file

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms</h1>
      <div className="terms-content">
        <p>Varsha Custom Computing does not provide warranty, support, or free repairs for the following cases:</p>
        <ul>
          <li>Liquid damage, exposure to moisture, or water ingress.</li>
          <li>Electrical damage due to power surges, faulty sockets, or unstable voltage.</li>
          <li>Physical damage caused by accidental drops, impacts, or mishandling after delivery.</li>
          <li>Unauthorized modifications or repairs performed by third parties.</li>
          <li>Use of non-recommended or incompatible accessories (e.g., power supplies, cables, cooling systems).</li>
          <li>Damage caused by overclocking, BIOS flashing, or firmware modification not done by us.</li>
          <li>Installation of unverified or pirated software leading to instability or data loss.</li>
          <li>Issues arising from improper transport or relocation by the customer.</li>
          <li>Damage caused by viruses, malware, or tampering with system files.</li>
        </ul>
        <p>
          Customers are advised to handle the system with care and use a proper power backup system (UPS) to prevent electrical issues.
        </p>
      </div>
    </div>
  );
};

export default Terms;

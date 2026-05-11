import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-qr-section">
          <h3>Scan to Visit</h3>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://anasmayo.com" 
            alt="Portfolio QR Code" 
            className="footer-qr" 
          />
          <p>Scan this QR code to quickly access this website on your mobile device</p>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Anas Mayo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

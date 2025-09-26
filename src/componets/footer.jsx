import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">My Online Store</h3>
            <p className="footer-description">
              Providing quality products and exceptional service since 2025.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C23.973 5.367 18.635.029 12.017.029zM15.357 7.037c.496-.002.865-.002 1.196-.002.331 0 .69 0 1.028-.002a.46.46 0 01.337.999 3.665 3.665 0 01-.673.194c-.496.097-.744.292-.744.722v1.844c0 .53.198.795.744.795.661 0 1.29-.097 1.786-.43.364-.242.598-.694.598-1.258V7.037h1.567v4.5c0 2.708-2.149 4.904-4.8 4.904-2.649 0-4.797-2.196-4.797-4.904v-4.5h1.567v1.862c0 .564.234 1.016.598 1.258.497.333 1.125.43 1.786.43.545 0 .744-.265.744-.795V8.949c0-.43-.248-.625-.744-.722a3.665 3.665 0 01-.673-.194.46.46 0 01.337-.999z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <nav className="footer-nav">
              <a href="/" className="footer-link">Home</a>
              <a href="/catalog" className="footer-link">Catalog</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/contact" className="footer-link">Contact</a>
            </nav>
          </div>

          {/* Customer Service Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Customer Service</h4>
            <nav className="footer-nav">
              <a href="/contact" className="footer-link">Help Center</a>
              <a href="/contact" className="footer-link">Returns</a>
              <a href="/contact" className="footer-link">Shipping Info</a>
              <a href="/contact" className="footer-link">Privacy Policy</a>
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Get in Touch</h4>
            <div className="footer-contact">
              <p className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                3245 Grove St, Murrieta, CA 92563
              </p>
              <p className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (619) 483-7137
              </p>
              <p className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@myonlinestore.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 My Online Store. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/contact" className="footer-link">Terms of Service</a>
              <a href="/contact" className="footer-link">Privacy Policy</a>
              <a href="/contact" className="footer-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
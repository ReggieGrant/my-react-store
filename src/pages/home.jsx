import "./home.css";

function Home() {
    return (
        <div className="home">
            {/* Floating decorative elements */}
            <div className="home-floating-element"></div>
            <div className="home-floating-element"></div>
            <div className="home-floating-element"></div>
            
            {/* Hero Section */}
            <div className="home-hero">
                <h1>Home Of The BEST Electronics!</h1>
                <p className="home-subtitle">
                    Discover cutting-edge technology and premium electronics. 
                    From smartphones to smart TVs, we've got everything you need 
                    to stay connected and entertained.
                </p>
            </div>

            {/* Hero Image */}
            <div className="home-image-container">
                <img 
                    className="top-img" 
                    src="/images/electronics.png"
                    alt="Latest Electronics Collection"
                    onError={(e) => {
                        e.target.src = '/images/placeholder-electronics.jpg';
                    }}
                />
            </div>

            {/* Call-to-Action Buttons */}
            <div className="home-cta">
                <a href="/catalog" className="home-cta-button home-cta-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                    </svg>
                    Shop Now
                </a>
                <a href="/about" className="home-cta-button home-cta-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"/>
                    </svg>
                    Learn More
                </a>
            </div>

            {/* Features Section */}
            <div className="home-features">
                <div className="home-feature">
                    <svg className="home-feature-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2ZM8 21L9.09 15.26L16 14L9.09 12.74L8 7L6.91 12.74L0 14L6.91 15.26L8 21Z"/>
                    </svg>
                    <h3>Premium Quality</h3>
                    <p>Hand-picked electronics from top brands, ensuring durability and performance you can trust.</p>
                </div>
                
                <div className="home-feature">
                    <svg className="home-feature-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.18L17.59 6.59L19 8L10 17Z"/>
                    </svg>
                    <h3>Fast Shipping</h3>
                    <p>Free shipping on orders over $50. Get your tech delivered quickly and securely to your door.</p>
                </div>
                
                <div className="home-feature">
                    <svg className="home-feature-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM18 9C18 13.25 15.39 17 12 17.5C8.61 17 6 13.25 6 9L12 5.5L18 9Z"/>
                    </svg>
                    <h3>Warranty Protection</h3>
                    <p>Comprehensive warranty coverage and dedicated customer support for peace of mind shopping.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
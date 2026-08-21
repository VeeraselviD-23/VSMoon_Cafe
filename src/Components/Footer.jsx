import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>

      <div className="footer-container">

        <div className="footer-box">

          <h2>
            VS MOON CAFE
          </h2>

          <p>
            Coffee • Dreams • Memories
          </p>

          <p>
            Experience the perfect blend of premium coffee,
            delicious food and unforgettable moments under the moon.
          </p>

        </div>


        <div className="footer-box">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <br />

          <Link to="/about">
            About
          </Link>

          <br />

          <Link to="/menu">
            Menu
          </Link>

          <br />

          <Link to="/membership">
            Membership
          </Link>

          <br />

          <Link to="/booking">
            Booking
          </Link>

          <br />

          <Link to="/contact">
            Contact
          </Link>

        </div>


        <div className="footer-box">

          <h3>
            Contact
          </h3>

          <p>
            Tulip Valley Road, Tamil Nadu
          </p>

          <p>
            +91 98765 43210
          </p>

          <p>
            info@vsmooncafe.com
          </p>

          <p>
            06:00 AM - 01:00 AM
          </p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 VS MOON CAFE | All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;
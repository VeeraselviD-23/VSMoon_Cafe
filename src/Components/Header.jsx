import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img
          src="src/assets/image/cafe logo.png"
          alt="VS Moon Cafe Logo"
        />
      </div>

      <div className="cafe-name">

        <h1>VS MOON CAFE</h1>

        <p>
          Coffee • Dreams • Memories
        </p>

      </div>
      <hr />

      <nav className="navbar">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/menu">
          Menu
        </Link>

        <Link to="/membership">
          Membership
        </Link>

        <Link to="/booking">
          Booking
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </nav>

      <hr />

    </header>
  );
}

export default Header;
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <h1>
          Welcome to VS Moon Cafe
        </h1>

        <h2>
          Where Coffee Meets Dreams
        </h2>

        <p>
          Inspired by Korean aesthetics and designed with
          a modern Indian touch, VS Moon Cafe offers the
          perfect destination for families, friends, couples,
          and coffee lovers.
        </p>

        <Link
          to="/menu"
          className="button"
        >
          Explore Our Cafe
        </Link>

        <Link
          to="/booking"
          className="button"
        >
          Book Your Table
        </Link>

      </section>

      <div
        id="moonCafeSlider"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#moonCafeSlider"
            data-bs-slide-to="0"
            className="active"
          />

          <button
            type="button"
            data-bs-target="#moonCafeSlider"
            data-bs-slide-to="1"
          />

          <button
            type="button"
            data-bs-target="#moonCafeSlider"
            data-bs-slide-to="2"
          />

          <button
            type="button"
            data-bs-target="#moonCafeSlider"
            data-bs-slide-to="3"
          />

        </div>


        <div className="carousel-inner">

          <div className="carousel-item active">

            <img
              src="/images/vsmooncafe.png"
              className="d-block w-100 slider-img"
              alt="VS Moon Cafe"
            />

            <div className="carousel-caption">

              <p>
                Coffee • Dreams • Memories
              </p>

            </div>

          </div>

          <div className="carousel-item">

            <img
              src="/images/balcony.png"
              className="d-block w-100 slider-img"
              alt="Cafe Balcony"
            />

            <div className="carousel-caption">

              <p>
                Enjoy unforgettable evenings under the moon.
              </p>

            </div>

          </div>

          <div className="carousel-item">

            <img
              src="/images/Dalton-Farms-tulip-rainbow-CR-CLIFF-BECKETT.jpeg"
              className="d-block w-100 slider-img"
              alt="Tulip Garden"
            />

            <div className="carousel-caption">

              <p>
                Beautiful Tulip Garden
              </p>

            </div>

          </div>

          <div className="carousel-item">

            <img
              src="/images/mooncafe.morning.jpeg"
              className="d-block w-100 slider-img"
              alt="Moon Cafe Morning"
            />

            <div className="carousel-caption">

              <p>
                Enjoy the beauty of nature.
              </p>

            </div>

          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#moonCafeSlider"
          data-bs-slide="prev"
        >

          <span className="carousel-control-prev-icon" />

        </button>


        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#moonCafeSlider"
          data-bs-slide="next"
        >

          <span className="carousel-control-next-icon" />

        </button>

      </div>

      <section>

        <h2>
          Welcome to Our Cafe
        </h2>
        <p className="home-content">

          VS Moon Cafe is a unique customized cafe where
          modern elegance meets the beauty of the moon and stars.

          Enjoy premium coffee, fresh juices, customized
          ice creams, delicious cafe specials and refreshing
          soft drinks in a peaceful and beautiful atmosphere.

        </p>

      </section>

      <section>

        <h2>
          Why Choose VS Moon Cafe?
        </h2>

        <div className="cards">


          <div className="card">

            <h3>
              Moon Theme
            </h3>

            <p>
              A beautiful moon and star inspired atmosphere
              designed for peaceful and memorable moments.
            </p>

          </div>


          <div className="card">

            <h3>
              Signature Coffee
            </h3>

            <p>
              Enjoy our specially customized coffee and
              premium beverages prepared with love.
            </p>

          </div>


          <div className="card">

            <h3>
              Customized Desserts
            </h3>

            <p>
              Enjoy delicious customized ice creams,
              cakes and special cafe desserts.
            </p>

          </div>


          <div className="card">

            <h3>
              Fresh Drinks
            </h3>

            <p>
              Refresh yourself with fresh juices,
              mocktails and customized soft drinks.
            </p>

          </div>

        </div>

      </section>

      <section className="info-box">

        <h2>
          Create Beautiful Memories
        </h2>

        <p>
          Whether you are spending time with family,
          meeting friends or enjoying a special moment,
          VS Moon Cafe is the perfect place for you.
        </p>

        <Link
          to="/booking"
          className="button"
        >
          Book Your Table
        </Link>

      </section>

    </>
  );
}

export default Home;
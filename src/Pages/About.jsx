function About() {
  return (
    <section className="page-section">

      <h1 className="data">
        About VS Moon Cafe
        <br/><br/>
      </h1>

      <p>
        VS Moon Cafe is a unique customized cafe that
        blends modern elegance with the beauty of the
        moon and stars.
      </p>

      <p>
        Our cafe is designed to create a peaceful and
        memorable experience for families, friends,
        couples and coffee lovers.
      </p>

      <p>
        Inspired by Korean aesthetics and combined with
        modern Indian hospitality, our cafe offers
        delicious food, premium beverages and beautiful
        surroundings.
      </p>
      <br/><br/>

      <div className="good">
      <img src="/images/MoonCafepicture.webp"/>
      </div>
      <br/>
      <hr/>

      <br/><br/>
      
      <div className="cards">

        <div className="card">

          <h3>
            Moon Inspired
          </h3>

          <p>
            Beautiful moon and star themed surroundings.
          </p>

        </div>


        <div className="card">

          <h3>
            Premium Coffee
          </h3>

          <p>
            Specially prepared signature beverages.
          </p>

        </div>


        <div className="card">

          <h3>
            Beautiful Garden
          </h3>

          <p>
            Peaceful tulip and palm tree surroundings.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;
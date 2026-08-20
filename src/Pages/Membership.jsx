import { useState } from "react";

function Membership() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    membership: ""

  });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Welcome ${formData.name}! Your membership request has been submitted.`
    );

  };


  return (

    <section className="page-section">

      <h1>
        VS Moon Cafe Membership
      </h1>

      <p>
        Join our membership program and enjoy special
        benefits, offers and memorable experiences.
      </p>


      <form
        className="cafe-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />


        <select
          name="membership"
          value={formData.membership}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Membership
          </option>

          <option value="Silver">
            Silver Membership
          </option>

          <option value="Gold">
            Gold Membership
          </option>

          <option value="Premium">
            Premium Membership
          </option>

        </select>


        <button
          type="submit"
          className="button"
        >
          Join Membership
        </button>

      </form>

    </section>
  );
}

export default Membership;
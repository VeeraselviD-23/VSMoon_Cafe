import { useState } from "react";

function Booking() {

  const [booking, setBooking] = useState({

    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2"

  });


  const handleChange = (e) => {

    setBooking({

      ...booking,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Table booked successfully for ${booking.name}!`
    );

  };


  return (

    <section className="page-section">

      <h1>
        Book Your Table
      </h1>

      <p>
        Reserve your table and enjoy a beautiful
        experience at VS Moon Cafe.
      </p>


      <form
        className="cafe-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={booking.name}
          onChange={handleChange}
          required
        />


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={booking.phone}
          onChange={handleChange}
          required
        />


        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          required
        />


        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleChange}
          required
        />


        <select
          name="guests"
          value={booking.guests}
          onChange={handleChange}
        >

          <option value="1">
            1 Guest
          </option>

          <option value="2">
            2 Guests
          </option>

          <option value="3">
            3 Guests
          </option>

          <option value="4">
            4 Guests
          </option>

          <option value="5">
            5 Guests
          </option>

          <option value="6">
            6 Guests
          </option>

          <option value="7">
            7 Guests
          </option>

          <option value="8">
            8 Guests
          </option>

        </select>


        <button
          type="submit"
          className="button"
        >
          Confirm Booking
        </button>

      </form>

    </section>
  );
}

export default Booking;
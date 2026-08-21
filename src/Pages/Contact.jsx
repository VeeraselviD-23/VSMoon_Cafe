import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState({

    name: "",
    email: "",
    subject: "",
    message: ""

  });


  const handleChange = (e) => {

    setMessage({

      ...message,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Thank you! Your message has been sent."
    );

  };


  return (

    <section className="page-section">

      <h1>
        Contact VS Moon Cafe
      </h1><br/><br/>


      <div className="contact-container">


        <div className="contact-info">

          <h2>
            Get In Touch!
          </h2>

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

          <div className="pic">
            <img src="/images/mooncontact.jpg"/>
          </div>

        </div>


        <form
          className="cafe-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={message.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={message.email}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={message.subject}
            onChange={handleChange}
            required
          />


          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={message.message}
            onChange={handleChange}
            required
          />


          <button
            type="submit"
            className="button"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
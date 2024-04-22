import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import '../components/styles/Feedback.css'

const Contact = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the formData to your server or perform other actions
    console.log("Form data submitted:", formData);
    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Layout><br></br><br></br><br></br>
      <div className="row">
        <div className="col-md-6 mb-4 p-3 border">
          <p className="mb-3" style={{ padding: "50px" }}>
            <h2>Contact Details</h2>
            <br />
            <br />
            <BiMailSend /> : www.Localhive@gmail.com
            <br />
            <BiPhoneCall /> : 012-3456789
            <br />
            <BiSupport /> : 1800-0000-0000 (toll-free)
            <br />
            Any query and info about the product, feel free to call anytime, we
            are available 24x7.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          {/* Decreased the size of the Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7541.202896582243!2d72.888596!3d19.081253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sDon%20Bosco%20Institute%20of%20Technology%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696837151172!5m2!1sen!2sin"
            width="80%"
            height="300"
            style={{ border: "10" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Feedback Form */}
      <div className="feedback">
        <div className="col-md-8 offset-md-2 text-center">
          <br></br><br></br>
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br />
            <br />
          </form>
        </div>
      </div><br></br><br></br><br></br><br></br>
    </Layout>
  );
};

export default Contact;

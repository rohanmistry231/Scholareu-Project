import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ey8zkj7", "template_vpz9f1h", form, "VOoatfMgQJxFwpCXu")
      .then((response) => {
        setSuccessMessage("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="home-container">
      {/* Highlighted "Explore Scholarships" Section */}
      <div className="highlight-container">
        <a href="/scholarships" className="highlighted-text">
          Explore Scholarships
        </a>
      </div>

      {/* Website Introduction Section */}
      <div className="website-details">
        <h1 className="animated-title">Welcome to Scholarship Finder</h1>
        <p className="description">
          🎓 <strong>Your Gateway to Global Scholarships!</strong> Explore
          thousands of scholarship opportunities to support your academic
          journey. Whether you want to study in Nepal or abroad, we have a
          scholarship for you.
        </p>
        <div className="how-to-use">
          <h2 className="animated-subtitle">How to Use This Website</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon">🔍</div>
              <p>
                <strong>1. Search Scholarships</strong> - Use the search bar to
                find scholarships by country, field of study, or funding type.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">📄</div>
              <p>
                <strong>2. Get Scholarship Info</strong> - Each listing includes
                a detailed description, criteria, funding details, and a direct
                link to apply.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">💻</div>
              <p>
                <strong>3. Apply Online</strong> - Click on the “Learn More”
                button to apply directly on the official scholarship site.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">📩</div>
              <p>
                <strong>4. Stay Updated</strong> - Bookmark our website and
                subscribe to get updates on new scholarships!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>

      {/* About Me Section */}
      <section className="about-me-section">
        <div className="about-me-content">
          <div className={`profile-container ${imageLoaded ? 'image-loaded' : ''}`}>
            <img
              src="profile.png" // Replace with your actual image URL
              alt="Your Name"
              className="profile-photo"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="about-me-text">
            <h2 className="about-me-title">About Me</h2>
            <p>
              Hello! I'm <span style={{ color: "#3b82f6" }}>
                <b>Meraj Hussain</b>
              </span>, dedicated to creating a platform that
              helps Nepali students discover and access scholarships that pave
              the way to their academic and career success. With my background
              in <span style={{ color: "#3b82f6" }}>
                <b>Computer Engineering</b>
              </span>, my mission is to make it
              easier for students in Nepal to find and apply for scholarships,
              supporting their journey toward a brighter future. Connect with me
              if you’re passionate about educational opportunities and want to
              explore how we can make a difference together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

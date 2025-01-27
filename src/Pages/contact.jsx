import "../styles/Contact.css"; // Import the CSS file for styling

const Contact = () => (
  <div className="contact-container">
    <h2 className="contact-heading">Contact Us</h2>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Your Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  </div>
);

export default Contact;

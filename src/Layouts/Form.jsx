import { useState } from "react";
import "./Layouts.css";
import Input from "../Components/Input";
import Submit from "../Components/Submit";

export default function Form() {
  const [message, setMessage] = useState("");

  function handleSubmit() {
    setMessage("Submitting your message...");
  }

  return (
    <section className="form-section" id="form-section">
      <h2>Have Questions About Planetary Science?</h2>

      <p>
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      <form
        action="https://whitebricks.com/tsacademy.php"
        method="post"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-grid">
          <Input
            label="Full Name"
            id="fullname"
            name="fullname"
            placeholder="Full name"
            minLength="10"
            maxLength="20"
            required
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            required
          />

          <Input
            label="Phone Number"
            id="phone-number"
            name="phone-number"
            type="tel"
            placeholder="Please enter a valid phone number"
            maxLength="11"
            required
          />
          <div className="message-container">
            <Input
              label="Message"
              id="message"
              name="message"
              type="textarea"
              placeholder="Enter your message..."
              maxLength="100"
              required
              rows="1"
            />
            <p>100 characters</p>
          </div>
        </div>

        <Submit />
      </form>

      {message && <p className="form-message">{message}</p>}
    </section>
  );
}

import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h1>Tell us about your crew</h1>
          <p className="lede">
            Send a note and we'll reply within a business day, or open the chat in the corner for
            an answer right now.
          </p>

          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>hello@fieldnote.example</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>(555) 019-2834</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Mon–Fri, 7am–6pm</dd>
            </div>
          </dl>
        </div>

        <div className="contact-card">
          {submitted ? (
            <div className="success">
              <span className="eyebrow">Sent</span>
              <h2>Message sent.</h2>
              <p>Thanks — someone from the team will get back to you within a business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Jordan Reyes" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Reyes Plumbing" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="jordan@example.com" />
              </div>
              <div className="field">
                <label htmlFor="message">What do you need?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="How many crews, and what you're using today."
                />
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

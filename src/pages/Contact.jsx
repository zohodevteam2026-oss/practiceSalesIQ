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
          <h1>Tell us what your home needs</h1>
          <p className="lede">
            Book a plumbing repair, HVAC service, or emergency visit. Tell us
            what is happening, and our Austin team will help choose the right
            appointment.
          </p>

          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>hello@northstarhomes.example</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>(512) 555-0148</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Mon-Sat, 7am-7pm</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>Austin and nearby neighborhoods</dd>
            </div>
          </dl>
        </div>

        <div className="contact-card">
          {submitted ? (
            <div className="success">
              <span className="eyebrow">Sent</span>
              <h2>Message sent.</h2>
              <p>
                Thanks. A Northstar team member will contact you to confirm your
                appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jordan Reyes"
                />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Taylor Home"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="taylor@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">What do you need?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about the leak, heating, or cooling problem."
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "100%" }}
              >
                Request an appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

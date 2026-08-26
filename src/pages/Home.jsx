import "./Home.css";

const appointments = [
  {
    time: "8:00",
    crew: "Northstar team",
    job: "Water heater repair",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    crew: "Northstar team",
    job: "AC tune-up",
    status: "Confirmed",
  },
  {
    time: "1:15 PM",
    crew: "Northstar team",
    job: "Kitchen leak repair",
    status: "Scheduled",
  },
];

const features = [
  {
    label: "Plumbing",
    title: "Repairs that get to the root of the problem",
    body: "Northstar handles leaks, clogged drains, water heaters, faucets, and other residential plumbing repairs.",
  },
  {
    label: "HVAC",
    title: "Comfort in every season",
    body: "Our HVAC technicians provide AC repair, heating repair, seasonal tune-ups, and honest replacement advice.",
  },
  {
    label: "Service area",
    title: "Local service across Austin",
    body: "Northstar serves homeowners throughout Austin and nearby neighborhoods with scheduled and emergency appointments.",
  },
  {
    label: "Our promise",
    title: "Clear arrival windows and upfront answers",
    body: "We explain the issue, the recommended repair, and the price before work begins. No confusing technician jargon.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Austin plumbing and HVAC</span>
            <h1>
              Keep your home
              <br />
              running right.
            </h1>
            <p className="lede">
              Northstar Home Services provides dependable residential plumbing
              and HVAC repairs, maintenance, and emergency service across
              Austin. One local team for the systems your home depends on.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/pricing">
                See pricing
              </a>
              <a className="btn btn-ghost" href="/contact">
                Talk to us
              </a>
            </div>
          </div>

          <div className="ticket-stack" aria-hidden="true">
            {appointments.map((j, i) => (
              <div className="ticket" key={j.job} style={{ "--i": i }}>
                <div className="ticket-row">
                  <span className="ticket-time">{j.time}</span>
                  <span className="ticket-status">{j.status}</span>
                </div>
                <div className="ticket-job">{j.job}</div>
                <div className="ticket-crew">{j.crew}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-inner">
          <p>
            Same-day appointments available. Call Northstar at (512) 555-0148.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature" key={f.label}>
                <span className="eyebrow">{f.label}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h2>Need a repair or seasonal tune-up?</h2>
          <p>
            Call Monday-Saturday, 7am-7pm. We will find the right appointment
            for your home.
          </p>
          <a className="btn btn-primary" href="/contact">
            Book a service visit
          </a>
        </div>
      </section>
    </>
  );
}

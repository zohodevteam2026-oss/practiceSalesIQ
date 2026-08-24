import "./Home.css";

const jobs = [
  { time: "8:00", crew: "Reyes crew", job: "Water heater install", status: "En route" },
  { time: "10:30", crew: "Nakamura crew", job: "Panel upgrade", status: "On site" },
  { time: "1:15", crew: "Okafor crew", job: "Leak inspection", status: "Scheduled" },
];

const features = [
  {
    label: "Dispatch",
    title: "Move a job with a drag, not a phone call",
    body: "See every crew's day on one board. Reassign a ticket and the crew gets the address, notes, and customer number on their phone immediately.",
  },
  {
    label: "Tickets",
    title: "One ticket, start to close",
    body: "Photos, parts used, and signed sign-off live on the same ticket the dispatcher opened. Nothing gets re-typed into a second system.",
  },
  {
    label: "Billing",
    title: "Invoice from the ticket itself",
    body: "Closing a job drafts the invoice from logged time and parts. Send it before the truck leaves the driveway.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Scheduling for field service teams</span>
            <h1>
              Run the crew's day
              <br />
              off one board.
            </h1>
            <p className="lede">
              Fieldnote replaces the whiteboard, the group chat, and the paper tickets with one
              schedule your whole team can see — plumbers, electricians, HVAC, and anyone who
              works out of a truck.
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
            {jobs.map((j, i) => (
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
          <p>No whiteboard photos texted at 6am. No two tickets for one job.</p>
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
          <h2>Get your crew on one schedule this week.</h2>
          <p>Set up takes an afternoon. No contract to start.</p>
          <a className="btn btn-primary" href="/contact">
            Start with your team
          </a>
        </div>
      </section>
    </>
  );
}

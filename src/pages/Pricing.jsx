import "./Pricing.css";

const plans = [
  {
    name: "Diagnostic visit",
    price: "$89",
    period: "flat visit fee",
    desc: "For finding the cause of a plumbing or HVAC problem.",
    features: [
      "Professional diagnosis",
      "Written recommendations",
      "Upfront repair estimate",
      "Fee credited toward approved repair",
    ],
    cta: "Book diagnostic",
    featured: false,
  },
  {
    name: "Home maintenance",
    price: "$149",
    period: "per visit",
    desc: "For keeping your plumbing and HVAC systems working reliably.",
    features: [
      "AC or furnace tune-up",
      "Plumbing system check",
      "Filter and safety inspection",
      "Maintenance report",
      "Priority scheduling",
    ],
    cta: "Book maintenance",
    featured: true,
  },
  {
    name: "Emergency service",
    price: "From $199",
    period: "after-hours visit",
    desc: "For urgent leaks, no cooling, no heat, or burst pipes.",
    features: [
      "Evening and weekend response",
      "Emergency leak control",
      "Heating and cooling failures",
      "Clear price before repair",
    ],
    cta: "Request emergency help",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">Service pricing</span>
          <h1>Simple pricing for a comfortable home</h1>
          <p className="lede">
            Northstar gives you a clear visit fee before work begins. The $89
            diagnostic fee is credited toward an approved repair.
          </p>
        </div>

        <div className="plans">
          {plans.map((p) => (
            <div
              className={`plan${p.featured ? " featured" : ""}`}
              key={p.name}
            >
              {p.featured && (
                <span className="plan-tag">Most homeowners choose this</span>
              )}
              <h2>{p.name}</h2>
              <div className="plan-price">
                <span className="amount">{p.price}</span>
                <span className="period">{p.period}</span>
              </div>
              <p className="plan-desc">{p.desc}</p>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}
                href="/contact"
                style={{ width: "100%" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          Prices cover labor for the listed visit. Parts and replacement
          equipment are quoted separately and approved before installation.
        </p>
      </div>
    </section>
  );
}

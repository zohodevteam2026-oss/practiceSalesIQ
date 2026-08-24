import "./Pricing.css";

const plans = [
  {
    name: "Solo",
    price: "$0",
    period: "1 crew, forever free",
    desc: "For a single truck keeping its own schedule.",
    features: ["1 crew", "Unlimited tickets", "Customer texts", "7-day history"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Crew",
    price: "$29",
    period: "per crew / month",
    desc: "For teams dispatching more than one truck a day.",
    features: [
      "Unlimited crews",
      "Drag-and-drop dispatch board",
      "Photo & signature capture",
      "Invoicing from tickets",
      "1-year history",
    ],
    cta: "Start with Crew",
    featured: true,
  },
  {
    name: "Shop",
    price: "Let's talk",
    period: "multi-location",
    desc: "For shops running several branches or franchises.",
    features: [
      "Everything in Crew",
      "Multiple locations",
      "Role-based permissions",
      "Priority phone support",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h1>Priced by the crew, not the seat</h1>
          <p className="lede">
            Dispatchers, office staff, and read-only accounts are free on every plan. You only pay
            for the crews on the road.
          </p>
        </div>

        <div className="plans">
          {plans.map((p) => (
            <div className={`plan${p.featured ? " featured" : ""}`} key={p.name}>
              {p.featured && <span className="plan-tag">Most crews pick this</span>}
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
          Every plan includes a 14-day trial. Ask us anything using the chat in the corner.
        </p>
      </div>
    </section>
  );
}

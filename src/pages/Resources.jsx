import "./Resources.css";

const articles = [
  {
    category: "Plumbing",
    title: "What to do when a pipe starts leaking",
    excerpt:
      "The first steps to limit water damage, find the shutoff valve, and know when a professional should handle the repair.",
    readTime: "6 min read",
  },
  {
    category: "HVAC",
    title: "How often should you service your air conditioner?",
    excerpt:
      "Learn what an AC tune-up includes and why spring maintenance can help your system run more reliably during an Austin summer.",
    readTime: "4 min read",
  },
  {
    category: "Home care",
    title: "Five signs your water heater needs attention",
    excerpt:
      "Watch for unusual noises, rusty water, leaks, and other signs that it is time to schedule a diagnostic visit.",
    readTime: "5 min read",
  },
  {
    category: "Emergency help",
    title: "When should you call for emergency plumbing service?",
    excerpt:
      "A quick guide to burst pipes, major leaks, no heat, and no cooling, including what to do before Northstar arrives.",
    readTime: "5 min read",
  },
  {
    category: "Pricing",
    title: "Understanding Northstar service pricing",
    excerpt:
      "See what is included in an $89 diagnostic visit, a $149 maintenance visit, and emergency service from $199.",
    readTime: "3 min read",
  },
];

const faqs = [
  {
    question: "What services does Northstar Home Services provide?",
    answer:
      "Northstar provides residential plumbing and HVAC service, including leak repairs, clogged drains, water heaters, AC repair, heating repair, and seasonal tune-ups.",
  },
  {
    question: "Where does Northstar provide service?",
    answer: "Northstar serves homeowners in Austin and nearby neighborhoods.",
  },
  {
    question: "How much does a diagnostic visit cost?",
    answer:
      "A standard diagnostic visit costs $89. The diagnostic fee is credited toward an approved repair.",
  },
  {
    question: "How much does home maintenance cost?",
    answer:
      "A home maintenance visit costs $149. It includes an AC or furnace tune-up, a plumbing system check, filter and safety inspection, and a maintenance report.",
  },
  {
    question: "How much does emergency service cost?",
    answer:
      "Emergency service starts at $199 for an after-hours visit. Parts and replacement equipment are quoted separately and approved before installation.",
  },
  {
    question: "What are Northstar's service hours?",
    answer:
      "Northstar is available Monday through Saturday, from 7am to 7pm. Same-day appointments may be available.",
  },
  {
    question: "What problems qualify as emergency service?",
    answer:
      "Burst pipes, major leaks, no cooling, and no heat may qualify for emergency service. Call (512) 555-0148 for help.",
  },
  {
    question: "How can I contact Northstar?",
    answer:
      "Email hello@northstarhomes.example, call (512) 555-0148, or use the website chat to request an appointment.",
  },
];

export default function Resources() {
  return (
    <section className="resources">
      <div className="container">
        <header className="resources-head">
          <span className="eyebrow">Northstar homeowner guide</span>
          <h1>Helpful answers for a comfortable Austin home.</h1>
          <p className="lede">
            Clear advice about plumbing repairs, HVAC maintenance, emergency
            service, and choosing the right appointment.
          </p>
        </header>

        <section className="article-section" aria-labelledby="articles-title">
          <div className="section-heading">
            <span className="eyebrow">From the field</span>
            <h2 id="articles-title">Articles for better operations</h2>
          </div>
          <div className="article-grid">
            {articles.map((article) => (
              <article className="article" key={article.title}>
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="article-time">{article.readTime}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-title">Questions teams ask before getting started</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

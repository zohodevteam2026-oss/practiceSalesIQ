import "./Resources.css";

const articles = [
  {
    category: "Dispatch",
    title: "How to build a field service schedule that survives the day",
    excerpt:
      "A practical way to balance travel time, job length, crew skills, and the inevitable urgent call without starting over at 10am.",
    readTime: "6 min read",
  },
  {
    category: "Operations",
    title: "The complete checklist for a clean job ticket",
    excerpt:
      "Capture the details that keep office staff, technicians, and customers on the same page from the first call through sign-off.",
    readTime: "4 min read",
  },
  {
    category: "Customer experience",
    title: "Simple ways to keep customers informed between booking and arrival",
    excerpt:
      "Use clear arrival windows and timely updates to reduce missed appointments and the calls that interrupt your dispatcher's day.",
    readTime: "5 min read",
  },
  {
    category: "Billing",
    title: "From completed work to paid invoice: close the loop faster",
    excerpt:
      "Learn which time, parts, photos, and signatures belong on every completed ticket before a crew leaves the property.",
    readTime: "5 min read",
  },
];

const faqs = [
  {
    question: "What kinds of field service teams use Fieldnote?",
    answer:
      "Fieldnote is built for small field teams such as plumbers, electricians, HVAC contractors, and repair businesses that coordinate work from trucks.",
  },
  {
    question: "Can I manage multiple crews on one schedule?",
    answer:
      "Yes. The dispatch board gives you one view of every crew's day, so you can assign, move, and review jobs without maintaining separate calendars.",
  },
  {
    question: "What information can technicians add from the job site?",
    answer:
      "Technicians can add job notes, photos, parts used, logged time, and a customer signature to the same ticket the office created.",
  },
  {
    question: "Does Fieldnote help with customer updates?",
    answer:
      "Yes. Customer texts keep people informed about their appointment while the crew's schedule and job details remain in the Fieldnote workspace.",
  },
  {
    question: "Can I create an invoice from a completed ticket?",
    answer:
      "Yes. Closing a ticket drafts an invoice using the time and parts recorded during the job, ready for your team to review and send.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams can set up their crews, services, and first schedule in an afternoon. You can start with a free Solo plan or begin a 14-day trial.",
  },
];

export default function Resources() {
  return (
    <section className="resources">
      <div className="container">
        <header className="resources-head">
          <span className="eyebrow">Fieldnote resources</span>
          <h1>Clearer days in the field start here.</h1>
          <p className="lede">
            Practical guidance for dispatchers and field crews who want fewer
            missed details and more jobs finished on time.
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
